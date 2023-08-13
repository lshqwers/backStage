<template>
  <div class="loginStyle">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-content"
    >
      <h3 class="h3Style">系统登入</h3>
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="ruleForm.userName"
          auto-complete="off"
          style="width: 300px"
          placeholder="请输入账号"
          prop="username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input
          type="password"
          v-model="ruleForm.password"
          auto-complete="off"
          style="width: 300px"
          placeholder="请输入密码"
          prop="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width: 100px; margin-left: -60px"
          >登录</el-button
        >
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from "mockjs";
import Cookie from 'js-cookie';
import { getData, getMenu } from "@/api";
import { Message } from "element-ui";
// 引入存token
// import { setToken } from "@/auth";

// 或者这种引入 import axios from '@/utils/http'
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value && value.length < 3) {
        callback("用户名长度不能小于3位");
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        // value && value.length > 2 && value.length < 5
      } else if (value && value.length < 3) {
        callback("密码长度不能小于3位");
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
      },
      rules: {
        // required: true这种红色的星号会出来
        userName: [{ validator: validateUserName, trigger: "blur", required: true }],
        passWord: [{ validator: validatePass, trigger: "blur", required: true }],
      },
    };
  },
  mounted(){
    getData().then((data) => {
      console.log(data, 'dataGetData');
    })
  },
  methods: {
    submitForm(formName) {
      // form表单的效验通过
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          /*
          // 后端返回token  mock中这里的random是大写的 Random
          // 获取token信息 const token = = Mcok.random.guid(); 注意单词拼写
          const token = Mock.Random.guid();
          // 把数据存放在cookie
          // token信息存放入cookie用于不同页面之间的通信
          Cookie.set('token', token);
          */
          // this.$store.commit("setToken");
          // this.login();
          const res = await getMenu(this.ruleForm);
          const { code, data, message } = res;
          console.log(data, 'data.mesaeh')
          if (data?.code === 200) {
            Cookie.set('token', data?.data?.token)
            this.$router.push({ path: "/home" });
            this.$message.success(data?.message);
          } else {
            // Message.error(data?.data?.message)
            this.$message.error(data?.data?.message);
          }
          // getMenu(this.ruleForm).then(({ data }) => {
          //   console.log(data, 'dataGetMenu')
          // }).catch((err) => {
          //   console.log(err, 'err9')
          //   Message.error(err?.message)
          // })
          // getData().then(res => {
          //   console.log(res, 'res')
          // }).catch(err => {
          //   console.log(err, 'err')
          // })
        }
      });
    },
    resetForm(formName) {},
    // 用mock登入,生成一个随机数
    login() {
      // const token = Mock.random.guid(); 单词错了
      // this.$store.commit("setToken", token);
      // token缓存 setToken(token)
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="less" scoped>
.loginStyle {
  width: 100%;
  height: 100%;
  position: absolute;
  // background-clip: ; 内容裁剪的内边距
  .login-content {
    height: 300px;
    width: 500px;
    // box-shadow: 10px 10px 10px 10px gray;
    background-clip: padding-box;
    border-radius: 15px;
    box-shadow: rgb(181, 179, 179) 0px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%; -50%);
  }
  .h3Style {
    color: #505458;
    margin: 0px auto 20px auto;
  }
}
</style>
