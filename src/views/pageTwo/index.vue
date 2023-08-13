<template>
  <div class="content">
    <span class="spanStyle">培训时间</span>
    <!-- 
        时间日期组件的回显
        el-date-picker 所绑定的v-model的值已经改变, 但是空件中没有实时更新
        在@input中采用this.$set方法进行数据的更新
    -->
    <!-- @input="timeDetailClick" -->
    <!-- 
         通过el-date-picker获取的是它的开始时间和结束时间
         [Wed Jul 27 2022 00:00:00 GMT+0800 (中国标准时间), Sat Jul 30 2022 00:00:00 GMT+0800 (中国标准时间), __ob__: Observer]
         range-separator 选择范围的分割符
         value-format="yyyy-MM-dd" 进行格式时间的转换
     -->
    <el-date-picker
      v-model="baseForm.liveTime"
      range-separator="-"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      type="daterange"
      value-format="yyyy-MM-dd"
      @change="TimeChange"
    >
    </el-date-picker>

    <el-select v-model="selectValue" placeholder="请选择" @change="selectEvent" class="selectStyle">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="inputValue[inputIndex-1].value" @change="inputEvent" placeholder="请输入内容" class="contentStyle" />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Page",
  data() {
    return {
      baseForm: {
        liveTimeStart: "",
        liveTimeEnd: "",
        liveTime: [],
      },
      options: [
        { value: '1', label: '黄金糕' },
        { value: '2', label: '双皮奶' },
        { value: '3', label: '北京烤鸭' }
      ],
      value: '',
      inputValue: [
        { id: '1', value: '' },
        { id: '2', value: '' },
        { id: '3', value: '' }
      ],
      hanleInput: '',
      inputIndex: 1,
      selectValue: '1'
    };
  },
  methods: {
    // datarange 回显
    // timeDetailClick(e) {
    //   this.$nextTick(() => {
    //     this.baseForm.liveTime = ["", ""];
    //     this.$set(this.baseForm, "baseForm", [e[0], e[1]]);
    //   });
    // },
    TimeChange(time) {
      console.log(time, "time");
    },

    inputEvent (e) {
      this.hanleInput = e
      this.inputValue.map((item) => {
        if (item['id'] === this.inputIndex) {
          item.value = this.hanleInput
        }
      })
    },

    // 下拉框的事件
    selectEvent (e) {
      this.inputIndex = e
    },
  },
  mounted() {
    console.log("1");
    this.inputValue[this.inputIndex - 1].value = '黄金糕'
    // this.baseForm.liveTime = ["2021-2-1", "2022-02-10"];
    // https://blog.51cto.com/u_13715487/4661028
    const arr = [
      "Wed Jul 27 2022 00:01:00 GMT+0800 (中国标准时间)",
      "Sat Jul 30 2022 00:00:00 GMT+0800 (中国标准时间)",
    ];
    //  moment(arr[0]).format("YYYY-MM-DD") 2022-07-27 00:01:00  moment(arr[0]).format("YYYY-MM-dd")  2022-07-We
    //  https://blog.csdn.net/weixin_45626517/article/details/108987286
    console.log(
      arr[0],
      moment(arr[0]).format("YYYY-MM-DD HH:mm:ss"),
      moment(arr[0]).format("YYYY-MM-dd")
    );
    this.$set(this.baseForm, "liveTime", ["2021-12-28", "2022-02-15"]);
    // this.$set(console.log(self, "selfself"));
  },
};
</script>

<style lang="less" scoped>
.content {
  .spanStyle {
    margin-right: 20px;
  }

  .selectStyle {
    margin-left: 20px;
  }
  .contentStyle {
    /deep/ .el-input__inner{
      width: 200px;
      margin-top: 20px;
    }
  }
 
}
</style>
