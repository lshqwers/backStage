<template>
  <div class="headerStyle">
    <el-row type="flex" align="middle">
      <el-col :span="1">
        <!-- <el-button plain size="small" @click="changeIsOpen">
                <i class="el-icon-menu" />
            </el-button> -->
        <!-- vuex中折叠和显示 -->
        <el-button plain size="small" @click="changeIsOpenStore">
          <i class="el-icon-menu" />
        </el-button>
      </el-col>
      <el-col :span="2">
        <span class="spanFont"> 首页 </span>
      </el-col>
      <el-col :span="20" class="colStyle">
        <!-- click.native -->
        <el-dropdown style="display: inline-block" @command="changeDriver">
          <span class="spanStyle">
            <i class="el-icon-s-custom" />
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item>我的</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item command="cancel">退出</el-dropdown-item>
            </el-dropdown-menu>
          </span>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  components: {
    //   name:  'el-icon-school',
    //   name: 'el-icon-s-custom'
  },
  data() {
    return {
      val: true,
    };
  },
  methods: {
    changeOpen() {
      console.log(12);
    },
    //设置cookie
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    // 删除cookie
    clearCookie(name) {
        this.setCookie(name, "", -1);
    },
    changeDriver(command) {
      if (command === 'cancel') {
        console.log(command, 'command200');
        // 清除Cookie的token信息
        Cookies.remove('token')
        // this.clearCookie('token')
        // 跳转到登录页面
        this.$router.push('/login')
      //   this.$router.push({
      //   //path: val.path 这种会报错
      //   // name: 'path2',
      //   // path: '/path2'
      //   path: "/login",
      // });
      }
    },
    changeIsOpen() {
      console.log(12456778);
      this.val = !this.val;
      this.$emit("childChange1", this.val);
    },
    changeIsOpenStore() {
      // console.log(this.$store.commit('isCollapseMenu'), 'this.$store.commit(isCollapseMenu)')
      // 改变state的值,只能通过mutitaion的方式改state的值
      this.$store.commit("isCollapseMenu2"); //isCollapseMenu
    },
  },
};
</script>

<style lang="less" scoped>
.headerStyle {
  color: #fff;
  .colStyle {
    display: flex;
    // flex-direction: column-reverse;
    justify-content: flex-end;
    .el-icon-s-custom {
      font-size: 24px;
    }
  }
  // .el-icon-school, .el-icon-s-custom{
  //     font-size: 22px;
  // }
  .spanFont {
    font-size: 18px;
  }
  .spanFont:hover {
    color: gray;
    font-weight: bold;
  }
}
</style>
