<template>
  <!-- 
    header-cell-style 设置表头的颜色  
    :row-key="getRowKeys"
    selection-change 当选择项发生变化时会触发该事件
    reserve-selection 仅对 type=selection的列有效, 类型为Boolean, 为true 则会在数据更新之后保留之前选中的数据(需指定row-key)
    toggleRowSelection 用于多选表格, 切换某一行的选中状态, 如果使用了第二个参数, 则是设置这一行选中与否(selected 为true)
  -->
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :header-cell-style="{ color: '#1572e9' }"
    :row-class-name="tableRowClassName"
    row-key="id"
    @selection-change="changeFunOpen"
    stripe
    :page-sizes="table_config.pageSize"
  >
    <!-- width的宽度太小了, 会有省略号 -->
    <el-table-column
      :align="table_config.isCenter ? 'center' : ''"
      v-if="table_config.checkbox"
      type="selection"
      width="55"
      :reserve-selection="true"
    ></el-table-column>
    <!-- 这边的顺序是, 另外一个table传过来的 -->
    <template v-for="item in table_config.thead">
      <!-- <el-table-column  :key="item.label">
          {{item}}
        </el-table-column> -->
      <!-- 回调 -->
      <el-table-column
        v-if="item.type === 'function'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
        <!-- 使用插槽, 把数据传过去, 在调用的那边进行处理 -->
        <template slot-scope="scope">
          <!-- {{scope}} -->
          <span>{{ item.callback && item.callback(scope.row, item.prop) }}</span>
        </template>
      </el-table-column>

      <el-table-column
        v-else-if="item.type === 'statusButtons'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
        <template slot-scope="scope">
          <!-- <span>{{scope.row.status}}</span> -->
          <!-- <span>{{item.callback && item.callback(scope.row, item.prop) }}</span> -->
          {{ scope.row.id }} {{ scope.row.status }}
          <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeSwitch(scope.row.id)"
            :disabled="scope.row.id === statusButtons"
          >
            <!-- {{scope.row.id}} -->
            <!-- {{item.callback && item.callback(scope.row, item.prop) }} -->
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column
        v-else-if="item.type === 'operator'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
        <template slot-scope="scope">
          <el-button
            type="button"
            v-for="(value, index) in item.operator"
            :key="index"
            @click="value.click(scope.row, value)"
          >
            {{ value.text }}
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
        v-else-if="item.type === 'images'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div>
            <el-image :src="item.callback && item.callback(scope.row, item.prop)">
            </el-image>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        v-else-if="item.type === 'pepoleSex'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
        <template slot-scope="scope">
          <span>
            {{ item.callback && item.callback(scope.row, item.prop) }}
          </span>
          <!-- <span :color="item.callback && item.callback(scope.row, item.prop) ==='男' ? 'green' : 'red'">
             {{item.callback && item.callback(scope.row, item.prop) }}
           </span> -->
        </template>
      </el-table-column>

      <!-- 纯文本渲染 -->
      <el-table-column
        v-else
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :align="table_config.isCenter ? 'center' : ''"
        :width="item.width"
      >
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      table_config: {
        thead: [],
        bbcc: 9999,
        ee: 131313,
        checkbox: true,
        isCenter: true,
        pageSize: "",
      },
      tableData: [],
      statusButtons: "",
      switch_flage: false,
      checkOpen: [],
    };
  },
  mounted() {
    this.initConfig();
  },
  methods: {
    // 初始化配置
    initConfig() {
      // 下面这一段是相应的key才会替换,没有相应的key就不会替换
      for (let key in this.config || {}) {
        if ((Object.keys(this.table_config || {}) || []).includes(key)) {
          this.table_config[key] = this.config[key];
        }
      }
      // console.log(this.table_config, "table_configtable_config");
    },
    changeSwitch(value) {
      // if(switch_flage){return false}
      this.statusButtons = value;
      this.$message.success("启用成功");
      this.switch_flage = true;
      /*
        if(this.switch_flag){return false}
        const requestData = {
          id: data.id,
          status: data.status
        }
        this.switch_disabled = data.id // 第一种方式: 组件本身的属性处理
        ParkingStatus(requestData).then(response => {
          this.$message({
            type: 'success',
            message: response.message
          })
           this.switch_disabled = '' // 成功之后在要把原来的值为空, 后面才能可以点击
        }).catch(error => {
           this.switch_disabled = ''
        })
      }
      */
      console.log(value, "valuechangeSwitch");
    },
    // 表格的隔行变色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "success-row"; // 这是类名
      } else {
        return "warning-row";
      }
    },
    getRowKeys(row) {
      console.log(row, "rowgetRowKeys");
      return row?.id;
    },
    changeFunOpen(val) {
      this.checkOpen = [];
      this.checkOpen = val;
    },
  },
  // props里面的值, 类似于data中的数据, 直接取出来就可以的
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    tableList: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    config: {
      handler(newValue, oldValue) {
        // console.log(newValue, "newValuenewValue");
      },
      immediate: true,
    },
    tableList: {
      handler(newValue) {
        this.tableData = newValue;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.success-row {
  background-color: blue !important;
}

.el-table--striped
  .el-table__body
  tr.el-table__row--striped.el-table__row--striped
  .el-table__row--striped
  td {
  background-color: red;
}
</style>
<style>
.el-table .warning-row {
  background: #fff;
}
.el-table .success-row {
  background: #b3d4f2;
}
</style>
