<template>
    <div class="layout-container" style="width: auto">
        <el-container class="layout-container">
            <el-aside width="auto" hight="auto">
                <!--  <Common_aside  :isCollapse="isCollapse" /> -->
                <CommonAside  :isCollapse="isCollapse" :valString="valString"/>
            </el-aside>
            <el-container>
                    <el-header>
                      <ComponentsHeader @childChange1="childChange"/>
                    </el-header>
                    <el-main>
                      <el-breadcrumb separator="/" class="breadcrumbStyle">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{ this.$router.history.current.name}}</el-breadcrumb-item>
                        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                      </el-breadcrumb>
                      <!-- this.$store.state.tab.meunData -->
                      <el-breadcrumb separator="/" class="breadcrumbStyle">
                      {{dataBreadcrumbItem}}
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <!-- <el-breadcrumb-item v-for="item in dataBreadcrumbItem" :key="item">{{item}}</el-breadcrumb-item> -->
                      </el-breadcrumb>
                      <!-- Main -->
                      <!-- <router-view /> -->
                      <router-view/>
                    </el-main>
                    <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// home页面可以为公共的layout，而不是首页这种的说法,所有的菜单跳转都有菜单的导航区域, 顶部的header区域
import CommonAside from '../components/commonAside.vue';
import ComponentsHeader from '@/components/header';
import { mapState } from 'vuex';
export default {
    name: 'Home',
    components: {
        CommonAside,
        ComponentsHeader
    },
    data(){
        return {
          isCollapse: false,
          valString: 123,
          // dataBreadcrumbItem: JSON.parse(JSON.stringify(this.$store.state.tab.meunData))
        }
    },
    methods: {
      childChange(val){
        // debugger
        this.isCollapse = !val   
        console.log(val, 'valqew', !val)
        this.valString = this.valString+1
        console.log(val, 'valqew', !val,  this.valString)
      }
    },
    mounted(){
      console.log(this.$router.history.current.name, 'mounted', this.dataBreadcrumbItem)
    },
    updated(){
      console.log(this.$router, 'updated', this.$router.history.current.name)
    },
    computed: {
      ...mapState({
        // 注意获取的是tab定义下的
        // dataBreadcrumbItem:localStorage.getItem('tabList')
        dataBreadcrumbItem:state=>state.tabList
        //  (state) => state.tab.meunData
      }),
      // dataBreadcrumbItem(newVal){
      //   console.log(localStorage.getItem('tabList'),123)
      //   return localStorage.getItem('tabList');
      // }
    }

}
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
//   background: #545c64
}
// .el-container{
//     // width: 100%;
//     height: 100%;
// }
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    background: #333;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    // line-height: 200px;
    height: auto;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 160px; 可能会导致表头高度变长
  }
  
//   body > .el-container {
//     margin-bottom: 40px;
//     height: 100%;
//   }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .breadcrumbStyle {
    margin: 0px 0px 20px 20px;
  }
</style>