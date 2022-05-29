<template>
  <el-container class="container">
    <el-menu
        default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="menuCurrentIndex ? JSON.parse(JSON.stringify(menuCurrentIndex)) : []"
    >
    <h3>{{isCollapse ?  '首页' : '通用后台管理系统'}} {{fatherToSon}}</h3>
    <template v-for="item in menuData">
            <el-menu-item v-if="!(item.children)" :index="item.path" :key="item.path" @click="jumpRoute(item)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-submenu :index="item.label" v-if="item.children" :key="item.label">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.label}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="itemVal in item.children" :key="itemVal.path" :index="itemVal.path"  @click="jumpRoute(itemVal, 'child')">
                        <i :class="itemVal.icon"></i>
                        {{itemVal.label}} {{itemVal.path}}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
    </template>
   </el-menu>
   </el-container>
</template>

<script>
import menuData from './menu.js'
console.log(menuData, 'menuData')
export default {
   props: {
      inputName: Boolean,
      // isCollapse: false 兄弟的通信
      // isCollapse: {
      //   type: Boolean,
      //   default: ''
      // },
      valString: {
        type: Number,
        default: ''
      }
   },
   data(){
    return {
        // isCollapse: false, // false不折叠的意思
        // menuList: [1,1-1, 1-2],
        menuCurrentIndex: [],
        menuData,
        SecondaryRouting: '',
        secondmMenu: [],
        isOpenRouter: true,
        arrTag: [],
        fatherToSon: '',
        tagData: []
      };
   },
   mounted(){
       this.handleMenuData()
       this.dealTree(menuData)
       this.menuCurrentIndex = JSON.parse(JSON.stringify(this.secondmMenu))
       console.log(JSON.parse(JSON.stringify(this.secondmMenu)), 'secondmMenusecondmMenu')
       this.fatherToSon = this.valString
   },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath, 'open');
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath, 'close');
      },
      handleMenuData(){       
      },
      dealTree(menuData){
            (menuData?? []).map((item)=> {
                //   item.children?.length > 0 && item.children ? this.dealTree(item.children) : ''
                //   delete item.children
              if(item.children?.length > 0 && item.children){
                    this.secondmMenu.push(item.label)
                  item.children.map((item)=> {
                  // this.secondmMenu = JSON.parse(JSON.stringify(this.secondmMenu.push(item.label)))
                    this.secondmMenu.push(item.path) // 把父节点的子节点的数据全部获取到
                  })
              }
          })
      },
      // dealTree(menuData)
      // 
      jumpRoute(val, type){
        console.log(val, val.label, 'valval', val.path)
        if(this.valString){
          for(let i in val){
            // let pathUrl = []
            if( val.label !== '首页'&& this.tagData.indexOf(val.label) == -1){
               this.tagData.push(val.label)
            }
          }
          //   this.valString.map((item) => {
          //   console.log(item, 'itemoyenjp habs')
          // })
        }
        this.$store.state.tab.meunData = this.tagData
        // 通过commit来修改mutations,
        this.$store.commit('SETTABLIst', this.tagData)
        console.log(val.name, val, 'valval', type, this.valString,  this.arrTag, 'pathUrl', this.tagData, 12, this.$store.state.tab.meunData)
          if(type){
            this.$router.push({
            //path: val.path 这种会报错
            // name: 'path2',
            // path: '/path2'
            name: val.name,
            path: val.path,
          })
          console.log(type, 'typetypetype', val.name, val.path)
        } else {
           this.$router.push({
            name: val.name,
            path: val.name
           })
        }

        console.log(this.$router, 'this.$routerthis.$router')
      },
   },
   // computed计算属性
   computed:{
       // 没有子项
       noChildren(){
           // menuData
           return this.menuData.filter(item => !item.children)
       },
        // 没有子项目
        hasChildren(){
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
          console.log(this.$store.state.tab.isCollapse, 'this.$store.state.tab.isCollapse')
          // this.$store.state.tab 是个模块
            return this.$store.state.tab.isCollapse
        }
   },
  //  vue中子组件的methods中获取到props中的值方法
  // 监听val的值, 当它由空转变时就会触发, 这时候就能取到了, 拿到值之后传到data的中的变量去
   watch: {
      // valString: (newVal, oldVal)=>{
      //   this.newParent = newVal
      //   console.log(newVal, oldVal, 'newVal, oldVal')
      // },
      valString: {
        handler(newVal, oldVal){
            this.fatherToSon = newVal
            console.log(newVal, oldVal, 'newVal, oldVal')
        },
        deep: true
      },
      isCollapse: (newVal, oldVal) => {
        console.log(newVal, 'isCollapseisCollapse')
      },
      deep: true
   }
}
</script>
<style lang="less" scoped>
  /* <style lange="less" scoped> lang="less" 不要写错了*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      border: none;
      h3 {
          text-align: center;
      }
  }
</style>