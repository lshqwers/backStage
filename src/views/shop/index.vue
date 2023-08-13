<template>
  <div>
    <!-- element table 指定row-key, row-key是唯一的  -->
    <TableData :config="config" :tableList="tableData" />
  </div>
</template>

<script>
import TableData from "@/components/tableData";
import Demand from "@/assets/images/demand.jpg";
import Develop from "@/assets/images/develop.jpg";
import PatflatArr from "@/assets/images/patflatArr.jpg";
import Sortable from "sortablejs";

export default {
  name: "Page",
  components: {
    TableData,
  },
  data() {
    return {
      config: {
        thead: [
          {
            label: "类型",
            prop: "type",
            type: "function",
            width: "60px",
            callback: (row, prop) => {
              // console.log(row,12,prop, row[prop])
              // console.log(row, "rowrowCallBack");
              const data = (this.parking_type || []).filter(
                (item) => item.value == row?.type
              );
              if (data && data.length > 0) {
                return data[0].label;
              }
            },
          },
          {
            label: "停车场名称",
            prop: "parkingName",
            type: "stop",
            width: "140px",
          },
          { label: "区域", prop: "address", type: "area", width: "160px" },
          {
            label: "图片",
            prop: "src",
            width: "100px",
            type: "images",
            callback: (row, prop) => {
              let url = row?.img;
              return url;
            },
          },
          { label: "可停放车辆", prop: "carsNumber", type: "stopCar", width: "260px" },
          {
            label: "禁启用",
            prop: "status",
            type: "statusButtons",
            width: "70px",
            callback: (row, prop) => {
              // <el-switch
              //     v-model="value"
              //     active-color="#13ce66"
              //     inactive-color="#ff4949">
              // </el-switch>
              return row;
              // console.log(row, prop, 'rowstatusButtons, prop')
            },
          },
          { label: "查看位置", prop: "lnglat", type: "lngFun", width: "260px" },
          {
            label: "性别",
            prop: "sex",
            type: "pepoleSex",
            width: "60px",
            callback: (row, prop) => {
              const dealData = this.parking_sex.filter(
                (item) => item.value === row[prop]
              );
              // 没有下面的判断, 可能出现没有返回值得时候报错
              if (dealData && dealData.length > 0) {
                return dealData[0].label;
              }
            },
          },
          // 表格的基本操作
          {
            label: "操作",
            type: "operator",
            width: "400px",
            //    prop: 'type',
            operator: [
              {
                text: "详情",
                click: (row, col, cellValue) => {
                  return this.getInfo(row);
                },
              },
              {
                text: "删除",
                click: (row, col, cellValue) => {
                  return this.delInfo(row);
                },
              },
              {
                text: "编辑",
                click: (row, col, cellValue) => {
                  return this.editInfo(row);
                },
              },
            ],
          },
        ],
        bbcc: 88888121212,
        dd: 33,
        // 按钮的显示隐藏
        checkbox: true,
        isCenter: true,
        pageSize: 3,
      },
      newArr: [
        { id: 1, number2: 20 },
        { id: 2, number: 40 },
      ],
      // 停车场状态
      parking_type: [
        { label: "室内", value: 1 },
        { label: "室外", value: 2 },
      ],
      // 停车场状态
      parking_status: [
        { label: "禁用", value: 1 },
        { label: "启用", value: 2 },
      ],
      parking_sex: [
        { label: "男", value: 0 },
        { label: "女", value: 1 },
      ],
      tableData: [
        {
          id: 1,
          type: 1,
          parkingName: "宝安图书馆停车场",
          address: "宝安大道",
          carsNumber: 16,
          status: 1,
          lnglat: "113.923716,22.52896",
          img: Demand,
          sex: 0,
        },
        {
          id: 2,
          type: 2,
          parkingName: "南山图书馆停车场",
          address: "南山大道",
          carsNumber: 15,
          status: 1,
          lnglat: "113.923716,22.52896",
          sex: 1,
        },
        {
          id: 3,
          type: 1,
          parkingName: "罗湖体育公园",
          address: "罗湖大道",
          carsNumber: 26,
          status: 1,
          lnglat: "113.923736,22.52896",
          img: PatflatArr,
          sex: 0,
        },
        {
          id: 4,
          type: 2,
          parkingName: "福田图书馆停车场",
          address: "福田大道",
          carsNumber: 257,
          status: 2,
          lnglat: "113.9237346,22.52896",
          sex: 1,
        },
        {
          id: 5,
          type: 1,
          parkingName: "龙华图书馆停车场",
          address: "龙华大道",
          carsNumber: 76,
          status: 1,
          lnglat: "113.923716,22.52896",
          img: Develop,
          sex: 0,
        },
        {
          id: 6,
          type: 2,
          parkingName: "坪洲图书馆停车场",
          address: "坪洲大道",
          carsNumber: 52,
          status: 2,
          lnglat: "113.923716,22.52896",
        },
      ],
    };
  },
  methods: {
    getInfo(val) {
      // 触发父方法
      console.log("获取详情", val);
    },
    delInfo(val) {
      // 触发父方法
      console.log("删除信息", val);
    },
    editInfo(val) {
      // 触发父方法
      console.log("编辑信息", val);
    },
    // 行拖拽
    rowDrop() {
      // querySelector()方法返回文档中匹配指定css选择器的一个元素
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          // debugger;
          console.log(newIndex, oldIndex, "newIndex, oldIndex", _this.tableData);
          const currRow = _this.tableData.splice(oldIndex, 1)[1];
          _this.tableData.splice(newIndex, 0, currRow);
          console.log(currRow, "currRowcurrRow");
        },
      });
    },
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          console.log(evt, "evtevtonEnd");
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
  mounted() {
    this.rowDrop();
    // this.columnDrop();
  },
};
</script>

<style></style>
// el-table__body-wrapper tbody
