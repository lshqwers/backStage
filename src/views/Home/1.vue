<template>
  <div>
    <el-dropdown :hide-on-click="false" style="float: right">
      <i class="el-icon-s-unfold"></i>
      <el-dropdown-menu slot="dropdown" >
        <!-- 作用是数据过多把表单数据的整体高度固定、多出的区域可以下拉展示 -->
        <!-- <el-scrollbar style="min-height: 20vh">
        </el-scrollbar> -->
          <el-checkbox-group v-model="colOptions">
            <el-dropdown-item @click.native="resect">重置</el-dropdown-item>
            <el-dropdown-item divided v-for="(item, index) in colSelectArr" :key="index">
              <el-checkbox :label="item" :key="item"></el-checkbox>
            </el-dropdown-item>
          </el-checkbox-group>
      </el-dropdown-menu>
    </el-dropdown>
 
    <el-table ref="tableDataRef" border stripe :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="index" width="55" label="序号" align="center"></el-table-column>
      <el-table-column v-if="colData[0].istrue" prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column v-if="colData[1].istrue" prop="name" label="姓名" width="180"> </el-table-column>
      <!-- <el-table-column v-if="colData[2].istrue" prop="sex" label="性别" width="180"> </el-table-column> -->
      <!-- <el-table-column v-if="colData[3].istrue" prop="age" label="年龄" width="180"> </el-table-column> -->
      <el-table-column v-if="colData[4].istrue" prop="dateTime" label="时间" width="180"> </el-table-column>
      <!-- <el-table-column v-if="colData[5].istrue" prop="address" label="地址"> </el-table-column> -->
      <div slot="append">
          <!--在此处添加你想要插入在表格最后一行的内容-->
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试sh3
      </div>
    </el-table>
</div>
</template>
 
<script>
export default {
  data() {
    return {
      colData:[
        {title: "日期", istrue: true},
        {title: "姓名", istrue: true},
        {title: "性别", istrue: true},
        {title: "年龄", istrue: true},
        {title: "时间", istrue: true},
        {title: "地址", istrue: true}
      ],
      colOptions:[],//默认全选
      colSelectArr: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          sex: 18,
          age: 20,
          dateTime: "2021-06-23 15:00:00",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          sex: 18,
          age: 20,
          dateTime: "2021-06-23 15:00:00",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          sex: 18,
          age: 20,
          dateTime: "2021-06-23 15:00:00",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          sex: 18,
          age: 20,
          dateTime: "2021-06-23 15:00:00",
          address: "上海市普陀区金沙江路 1516 弄",
        }
      ],
    }
  },
  methods:{
    resect(){
      this.colOptions = [];
      this.colSelectArr = [];
      this.colData.map(v=>{
        this.colSelectArr.push(v.title)
        // this.colOptions.push(v.title)
      })
      this.colSelectArr = [...this.colSelectArr]
      this.colOptions = this.colSelectArr
    }
  },
  watch: {
    colOptions(valArr) {
      var arr = this.colSelectArr.filter(i => valArr.indexOf(i) < 0); // 未选中
      this.colData.filter(i => {
        if (arr.indexOf(i.title) != -1) {
          i.istrue = false;
        } else {
          i.istrue = true;
        }
      })
 
      this.$nextTick(() => {
        this.$refs.tableDataRef.doLayout();
      })
 
    }
  },
  created(){
    var _this = this;
    for (let i = 0; i < _this.colData.length; i++) {
      _this.colSelectArr.push(_this.colData[i].title);
      if (_this.colData[i].title == '名称') { //初始化不想展示的列可以放在这个条件里
        continue;
      }
      _this.colOptions.push(_this.colData[i].title); 
        
    }
  }
}
</script>