<template>
  <div class="layout-container" style="width: auto">
    <el-container class="layout-container">
      <el-aside width="auto" hight="auto">
        <!--  <Common_aside  :isCollapse="isCollapse" /> -->
        <CommonAside
          :isCollapse="isCollapse"
          :valString="valString"
          :currentTag="currentTag"
        />
      </el-aside>
      <el-container>
        <el-header>
          <ComponentsHeader @childChange1="childChange" />
        </el-header>
        <el-main>
          <div class="tabs">
            <el-breadcrumb separator="/" class="breadcrumbStyle">
              <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
              <el-breadcrumb-item
                v-for="tag in dataBreadcrumbItem"
                :to="tag.path"
                :key="tag.label"
              >
                {{ tag ? tag.label : "" }}
              </el-breadcrumb-item>

              <br />
              <!-- 面包屑数据的展示 -->

              <el-breadcrumb-item
                v-for="item in tags"
                :key="item.path"
                :to="{ path: item.path }"
              >
                {{ item.label }}
              </el-breadcrumb-item>

              <!-- <el-br>{{ this.$router.history.current.name}}</el-br eadcrumb-item> -->
            </el-breadcrumb>
            <!-- this.$store.state.tab.meunData -->
            <!--  closable={{tag.name !== 'home'}}  -->
            <el-tag
              style="margin-bottom: 20px"
              v-for="tag in dataBreadcrumbItem"
              :key="tag.label"
              :closable="tag.name !== 'home'"
              :to="tag.path"
              @close="handleClose(tag)"
              @click="clickEvent(tag)"
              size="small"
              :effect="$route.name === tag.name ? 'dark' : 'plain'"
            >
              {{ tag ? tag.label : "" }}
            </el-tag>

            <br />

            <el-tag
              v-for="(tag, index) in tags"
              :key="tag.name"
              :closable="tag.name !== 'home'"
              :to="tag.path"
              :effect="$route.name === tag.name ? 'dark' : 'plain'"
              @close="handleCloseTag(tag, index)"
              @click="changeMenu(tag)"
            >
              {{ tag ? tag.label : "" }}
            </el-tag>
          </div>

          <br />
          <!-- Main -->
          <!-- <router-view /> -->
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// home页面可以为公共的layout，而不是首页这种的说法,所有的菜单跳转都有菜单的导航区域, 顶部的header区域
import CommonAside from "../components/commonAside.vue";
import ComponentsHeader from "@/components/header";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    CommonAside,
    ComponentsHeader,
  },
  data() {
    return {
      isCollapse: false,
      valString: 123,
      tagDataList: this.$store.state.tab.meunData
        ? JSON.parse(JSON.stringify(this.$store.state.tab.meunData))
        : "",
      tagList: [],
      currentTag: {},
      // dataBreadcrumbItem: JSON.parse(JSON.stringify(tabList)),
    };
  },
  methods: {
    childChange(val) {
      // debugger
      this.isCollapse = !val;
      this.valString = this.valString + 1;
    },
    handleClose(tag) {
      console.log(tag, "tagtag", this.dataBreadcrumbItem);
      // 返回的是除了当前选中的数据
      // indexOf如果存在返的它的下标,如果不存在返回的是-1
      this.currentTag = tag;
      let list = this.dataBreadcrumbItem.indexOf(tag);
      this.dataBreadcrumbItem.splice(this.dataBreadcrumbItem.indexOf(tag), 1);
      console.log(
        this.dataBreadcrumbItem,
        "this.dataBreadcrumbItemthis.dataBreadcrumbItem",
        list,
        this.dataBreadcrumbItem.indexOf(tag)
      );
      tag = "";
    },
    clickEvent(tag) {
      this.$router.push({
        //path: val.path 这种会报错
        name: tag.name,
        path: tag.path,
      });
    },

    // 点击tag, 进行跳转
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },

    ...mapMutations({
      close: "closeTag",
    }),

    // 关闭tag
    handleCloseTag(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
  mounted() {
    console.log(
      this.$router.history.current.name,
      "mounted",
      this.tagDataList,
      "state.tabList"
    );
  },
  updated() {
    // console.log(this.$router, "updated", this.$router.history.current.name);
  },
  computed: {
    ...mapState({
      // 注意获取的是tab定义下的
      // dataBreadcrumbItem:localStorage.getItem('tabList')
      dataBreadcrumbItem: (state) => state.tabList,
      //  (state) => state.tab.meunData
    }),
    // dataBreadcrumbItem(newVal, oldVal){
    //   console.log(localStorage.getItem('tabList'),123, newVal, oldVal, localStorage.getItem('tabList').length)
    //   return localStorage.getItem('tabList');
    // }
    ...mapState({
      tags: (state) => state.tabListMenu,
    }),
  },
  watch: {
    dataBreadcrumbItem(newVal, oldVal) {
      this.tagList = newVal;
    },
  },
};
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
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
  background-color: #e9eef3;
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

.el-tag + .el-tag {
  margin-left: 10px;
  margin-bottom: 20px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
