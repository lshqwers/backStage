<template>
  <div>
    <el-select
      v-model="value"
      placeholder="请选择"
      popper-class="page-select-wrapper"
      clearable
      :popper-append-to-body="true"
      class="selectStyle"
      v-el-select-loadmore="loadMore(rangeNumber)"
    >
      <el-option
        v-for="(item, index) in dataList.slice(0, rangeNumber)"
        :key="item.id"
        :label="item.label"
        :value="index"
      >
      </el-option>
    </el-select>
    <EditTable class="EditTableStyle" />
  </div>
</template>

<script>
import EditTable from "./EditTable.vue";
export default {
  components: {
    EditTable,
  },
  directives: {
    "el-select-loadmore": (el, binding) => {
      // 获取element-ui定义好的scroll盒子
      const SELECTWRAP_DOM = el.querySelector(
        ".el-select-dropdown .el-select-dropdown__wrap"
      );
      if (SELECTWRAP_DOM) {
        SELECTWRAP_DOM.addEventListener("scroll", function () {
          const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
          if (condition) binding.value();
        });
      }
    },
  },
  data() {
    return {
      dataList: [
        {
          id: 0,
          value: "选项0",
          label: "黄金糕0",
        },
        {
          id: 1,
          value: "选项1",
          label: "双皮奶1",
        },
        {
          id: 2,
          value: "选项3",
          label: "蚵仔煎2",
        },
        {
          id: 3,
          value: "选项4",
          label: "龙须面3",
        },
        {
          id: 4,
          value: "选项5",
          label: "北京烤鸭4",
        },
        {
          id: 5,
          value: "选项1",
          label: "黄金糕5",
        },
        {
          id: 6,
          value: "选项2",
          label: "双皮奶6",
        },
        {
          id: 7,
          value: "选项3",
          label: "蚵仔煎7",
        },
        {
          id: 8,
          value: "选项4",
          label: "龙须面8",
        },
        {
          id: 9,
          value: "选项5",
          label: "北京烤鸭9",
        },
        {
          id: 10,
          value: "选项1",
          label: "黄金糕10",
        },
        {
          id: 11,
          value: "选项2",
          label: "双皮奶11",
        },
        {
          id: 12,
          value: "选项3",
          label: "蚵仔煎12",
        },
        {
          id: 13,
          value: "选项4",
          label: "龙须面13",
        },
        {
          id: 14,
          value: "选项5",
          label: "北京烤鸭14",
        },
        {
          id: 15,
          value: "选项3",
          label: "蚵仔煎15",
        },
        {
          id: 16,
          value: "选项4",
          label: "龙须面16",
        },
        {
          id: 17,
          value: "选项17",
          label: "北京烤鸭17",
        },
      ],
      value: "",
      list: [], // 数据
      currentPage: 1, // 当前页
      rangeNumber: 10,
      firstMaintain: "", //下拉框绑定的值
      maintainOption: [], //下拉框要展示数据
    };
  },
  methods: {
    loadMore(n) {
      // n 是默认始展示的条数会在渲染的时候
      // element ui下来超过7条才会出现滚动条, 如果初始不出滚动条无法触发loadMore方法
      console.log("loadMore:" + n, this.rangeNumber);
      return () => (this.rangeNumber += 1);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.selectStyle {
  list-style: none;
}
.EditTableStyle {
  margin: 20px 0px;
}
</style>
