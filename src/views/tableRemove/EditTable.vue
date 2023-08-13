<template>
  <div class="process_manage">
    <div class="imgs">
      <div class="d1 imgOne">
        <img
          :src="imgList"
          style="width: 100px; height: 200px; vertical-align: sub; margin-right: 20px"
        />
        <button @click="clickEvent('imgOne')">点击显示图片</button>
      </div>
      <!-- developImg -->
      <div class="d1 imgTwo">
        <img
          :src="developImg"
          style="width: 100px; height: 200px; vertical-align: sub; margin-right: 20px"
        />
        <button @click="clickEvent('imgTwo')">点击显示图片</button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" height="100%" :src="dialogImageUrl" alt="占无图片显示" />
    </el-dialog>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>审批流程</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="seach_onoff = !seach_onoff"
        >
          搜索按钮
        </el-button>
      </div>
      <el-row :gutter="10" :class="seach_onoff ? 'lz-seach-animation' : 'lz-seach'">
        <el-col :span="5" class="lz-el-col"
          ><el-input
            v-model="seach_val"
            @input="seachValue"
            placeholder="请输入内容"
          ></el-input
        ></el-col>
        <el-col :span="5" class="lz-el-col"
          ><el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            plain
            @click="seachValue"
            >搜索</el-button
          ></el-col
        >
      </el-row>
      <el-button
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="add_approver"
        style="margin: 20px 0px"
        >添加审批流程</el-button
      >
      <el-table
        :data="processData"
        border
        highlight-current-row
        :class="EditOnoff ? 'tb-edit' : 'tb-edit2'"
        @row-click="handleCurrentChange"
      >
        <el-table-column
          fixed
          prop="createDate"
          label="创建日期"
          width="150"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column label="流程名称" width="150" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="EditBefore.name"
              placeholder="流程名称"
            ></el-input>
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="流程发起人" width="150" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="EditBefore.userName"
              placeholder="流程发起人"
              disabled
            ></el-input>
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="流程状态" width="150">
          <template slot-scope="scope">
            <el-switch
              v-model="EditBefore.status"
              active-text="启用"
              inactive-text="禁用"
              active-value="0"
              inactive-value="1"
            ></el-switch>
            <span>{{ scope.row.status == 1 ? "禁用" : "启用" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="流程简介" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="EditBefore.remark"
              placeholder="流程简介"
            ></el-input>
            <span>{{ scope.row.remark }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleComplete"
              v-if="scope.row.id == EditBefore.id && EditOnoff"
              >完成</el-button
            >
            <el-button
              type="text"
              size="small"
              @click.stop="EditOnoff = false"
              v-if="scope.row.id == EditBefore.id && EditOnoff"
              >取消</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
              v-else
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              @click.stop="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button
              type="text"
              size="small"
              @click.stop="handleDelete(scope.$index, scope.row)"
              >设置</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- //分页 -->
      <el-pagination
        style="margin: 20px 0; float: right"
        @current-change="pageleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import imgList from "@/assets/images/数组的拍平.jpg";
import developImg from "@/assets/images/develop.jpg";
import moment from "moment";

export default {
  name: "process_manage",
  computed: {
    ...mapGetters(["api"]),
  },
  data() {
    return {
      seach_onoff: false, //搜索显示
      seach_val: "", //搜索类容2
      currentPage: 1, //分页中当前第几页
      count: 0, //分页数据总条数
      processData: [
        //流程数据
        {
          pmUserName: "",
          // moment moment(new Date()).format('YYYY-MM-DD')
          // createDate: new Date().getTime(),
          createDate: moment(new Date()).format("YYYY-MM-DD  HH:mm:ss"),
        },
      ],
      //编辑
      EditOnoff: false, //是否可编辑
      EditBefore: {}, //编辑之前的数据
      // imgList: arrFlatten 这种写法也行
      imgList,
      developImg,
      dialogVisible: false,
      dialogImageUrl: "",
    };
  },
  mounted() {
    //获取登录用户的组织审批流程
    this.getProcessData();
    // console.log(this, "thisLoading");
    this.loadImg(this.imgList);
  },
  methods: {
    //获取当前公司的所有审批流程
    getProcessData() {
      let that = this;
      let req = {
        pageNum: that.currentPage,
        isPage: true,
      };
      // that.GLOBAL.doPost(that.api.GLOBAL_flow_getByOwner, req, function (res) {
      //   if (res.code == 200) {
      //     that.processData = res.data.list;
      //     that.count = res.data.total;
      //   }
      // });
    },
    // 查询的按钮
    seachValue() {},
    //点击行
    handleCurrentChange(row, event, column) {
      let that = this;
      console.log(row.id, that.EditBefore.id);
      if (row.id == that.EditBefore.id) {
        that.EditOnoff = true;
      } else {
        that.EditOnoff = false;
      }
    },
    //编辑
    handleEdit(index, row) {
      let that = this;
      console.log(row);
      that.EditOnoff = true;
      //复制编辑前的数据
      that.EditBefore = { ...row };
    },
    //删除
    handleDelete(index, row) {
      this.$confirm("是否删除此‘" + row.name + "’流程", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {})
        .catch(() => {});
    },
    //完成
    handleComplete() {
      let that = this;
      that.EditOnoff = true;
      console.log(that.EditBefore);
      that
        .$confirm("是否完成此次编辑", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          that.GLOBAL.doPost(
            that.api.GLOBAL_user_update,
            JSON.stringify(that.EditBefore),
            function (res) {
              console.log(res);
              if (res.code == 200) {
                that.$message({ message: res.msg, type: "success" });
                that.EditOnoff = false;
                //获取人员列表
                that.getByOrg();
              }
            }
          );
        })
        .catch(() => {});
    },
    //添加审批人
    add_approver() {
      this.$router.push({ name: "processSetting", path: "/processSetting" });
    },
    //分页
    pageleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      let that = this;
      that.currentPage = val;
      //获取当前公司的所有审批流程
      that.getProcessData();
    },
    // promise异步加载图片
    loadImg(url) {
      const p = new Promise((resolve, reject) => {
        let newImg = document.createElement("img");
        newImg.src = url;
        newImg.onload = function () {
          resolve(newImg);
        };
        newImg.onerror = function () {
          reject(new Error(`Colud not load Image at ${url}`));
        };
      });
      return p;
    },

    /*
        // vue中的methods不可以使用箭头函数, vue中的检讨函数的
        clickEvent: () => {
          // 箭头函数中没有this的指向的
          this.dialogVisible = true;
          console.log(this, "thisCuclik");
        },
    */
    clickEvent(type) {
      this.dialogVisible = true;
      if (type === "imgOne") {
        this.dialogImageUrl = imgList;
      } else if (type === "imgTwo") {
        this.dialogImageUrl = developImg;
      }
    },
  },
};
</script>

<style scoped="scoped" lang="less">
.imgs {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
  .imgOne {
    margin-right: 100px;
  }
}
.d1 > * {
  // display: flex;
  flex-direction: column;
  // justify-items: flex-end;
}
.lz-el-col {
  width: 200px;
  margin-bottom: 10px;
}
.el-table .lz-fontsize-weidth {
  font-weight: bold;
}
.el-table .lz-fontsize {
  font-weight: normal;
  color: #888;
}
//搜索动画显示
.lz-seach {
  max-height: 0px;
  margin-bottom: 0px;
  overflow: hidden;
}
.lz-seach-animation {
  animation: lzmover 0.6s ease-in-out forwards;
  display: block;
  overflow: hidden;
}

//表格的可编辑
.tb-edit .el-input {
  display: none;
}
.tb-edit .el-select {
  display: none;
}
.tb-edit .el-switch {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-select {
  display: block;
}
.tb-edit .current-row .el-switch {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
}
.tb-edit .current-row .el-switch + span {
  display: none;
}
.tb-edit .current-row .el-select + span {
  display: none;
}
//取消
.tb-edit2 .current-row .el-input + span {
  display: block;
}
.tb-edit2 .el-input {
  display: none;
}
.tb-edit2 .el-select {
  display: none;
}
.tb-edit2 .el-switch {
  display: none;
}
@keyframes lzmover {
  0% {
    height: 0px;
    opacity: 0;
    margin-bottom: 0px;
  }
  100% {
    height: 100%;
    opacity: 1;
    margin-bottom: 10px;
  }
}
</style>
