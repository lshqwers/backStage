<template>
  <div>

    <!-- 大文件上传 VUE + NodeJs实现大文件上传 -->
    <!-- 
         整体思路
         将文件切成多个小文件
         hash计算, 需要计算一个文件的唯一的标识, 这样下次再传, 就能筛选出剩余的切片进行上传。(上传了多少片, 剩余多少片)
         所有切片上传后, 通知服务短进行切片合成 (切成完后, 后端做合并)
         上传成功通知前端文件路径
         整个过程如果出现失败, 下次再传时, 由于之前计算过文件hash,
         可以筛选初未传数的切片续传(断点续传);
         如果整个文件已经上传过, 就不需要传输(秒传)

         断点续传: 上传完后, 断网了, 把剩下的继续上传完整
         秒传: 上传完后, 下次再传就直接上传成功了
    -->
    
    <el-upload ref="file" 
      :http-request="handleFileUpload" 
      action="#" class="avatar-upload"
      :show-file-list = "false"
    >
      <el-button type="primary">上传文件</el-button>
    </el-upload>

    <div>
      <div class="hashProgress">
        计算hash的进度:
      </div>
      <el-progress  class="progressStyle" :stroke-width="20" :text-inside="true" :percentage="hashProgress"></el-progress>
    </div>

    <div>
      <div>上传进度:</div>
      <el-progress class="progressStyle" :stroke-width="20" :text-inside="true" :percentage="uploaedProgress"></el-progress>
    </div>

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
import http from "@/utils/request";
import sparkMD5 from 'spark-md5';
import { time } from "echarts";
const CHUNK_SIZE = 1024 * 1024 * 5 // 每个切片为1M

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

      file: null, // 上传的文件
      chunks: [], // 切片
      hashProgress: 10, // hash值计算进度
      uploaedProgress: 10,
      hash: ''
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

    // 大文件上传
    handleFileUpload(e) {
      const { file } = e
      if (!file) {
        return
      }
      this.file = file;
      this.upload();
    },

    // 文件上传
    async upload() {
      // 切片
      const chunks = this.createFileChunk(this.file) 

      // hash计算
      const hash = await this.calculateHash1(chunks)
    },

    // 文件切片  shidashi_SEM666.exe 拿这个为实验
    createFileChunk (size = CHUNK_SIZE) {
      const chunks = [];
      let cur = 0;
      // 取最大整数片
      const maxLen = Math.ceil(this.file.size / CHUNK_SIZE);
      console.log(maxLen, 'maxLen ---', this.file.size / CHUNK_SIZE, this.file.slice(1, 2));
      while (cur < maxLen) {
        const start = cur * CHUNK_SIZE;
        const end = ((start + CHUNK_SIZE) >= this.file.size) ? this.file.size : start + CHUNK_SIZE;
        chunks.push({
          index: cur,
          file: this.file.slice(start, end)
        })
        cur++;
      }
      console.log(chunks, 'chunks 200');
      return chunks
    },

    /*
      hash计算
      利用md可以计算出文件唯一的hash值
      这里可以使用 spark-md5 这个库可以增量计算文件的hash值
    */

    calculateHash1 (chunks) {
      const spark=new sparkMD5.ArrayBuffer()
      let count =0
      const len=chunks.length
      let hash
      const self=this
      const startTime = new Date().getTime()
      return new Promise((resolve) => {
        const loadNext = index => {
                const reader = new FileReader()
                // 逐片读取文件切片
                reader.readAsArrayBuffer(chunks[index].file)
                reader.onload = function (e) {
                  const endTime = new Date().getTime()
                  chunks[count] = {...chunks[count], time: endTime - startTime}
                  count++
                  // 读取成功后利用spark做增量计算
                  spark.append(e.target.result)
                  if (count == len) {
                    self.hashProgress = 100
                    // 返回整个文件的hash
                    hash = spark.end()
                    resolve(hash)
                  } else {
                    // 更新hash 计算进度
                    self.hashProgress += 100/len
                    loadNext(index + 1)
                  }

            }
        }
        loadNext(0)
      })

    }

  },
  mounted() {
    this.rowDrop();
    // this.columnDrop();
  },
};
</script>

<style>
.hashProgress {
  margin-top: 10px;
}
.progressStyle {
  margin: 10px;
}
</style>
// el-table__body-wrapper tbody
