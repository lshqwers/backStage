<template>
  <div>
      <div v-if="(JSON.parse(JSON.stringify(tabObj || []))).length > 0">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <template  :keyed="index"  v-for="(itemValue, index) in ((JSON.parse(JSON.stringify(tabObj || []))) ||[] )">
            <el-tab-pane
              :label="itemValue[name]+''+('_(' +(JSON.parse(JSON.stringify(newLength || [])))[index])  +')'"
              :name="index+''"
              v-for="(txvalue, name) in itemValue"
              :key="name">
              <div v-show="(index == activeName)">
                  <!-- {{index}} {{num}} -->
                  <!-- {{index}}  {{(JSON.parse(JSON.stringify(newLength || [])))[0] }} -->
                  <!-- {{ (JSON.parse(JSON.stringify(newTabList || []))) }} -->
                  <ul>
                    <template v-for="(itemUl2, name) in newTabList[0]" :keyed="name">
                    <li v-for="(itemFilter2,index) in  itemUl2" :key="index">
                      {{itemFilter2}}
                    </li>
                    </template>
                  </ul>
              </div>
            </el-tab-pane>
          </template>
        </el-tabs>
      </div>
      <p v-else>没有数据展示</p>
  </div>
</template>

<script>
import Tablist  from './1.js'
export default {
  data() {
      return {
        activeName: '0',
        dealWith: [],
        tabObj: [],
        newList: [],
        newTabList: [],
        newLength: [],
      };
  },
    methods: {
      handleClick(tab, event) {
        // 如果activeName一样可能会出现报错的行为
        // this.activeName =  tab.name 对应的是:name="name" name字段
        this.activeName =  tab.index
        // const newListArr = Tablist?.data?.entities
        this.newTabList = (Tablist?.data?.entities||[]).filter((item, index)=> {
            if(this.activeName == index){
              // return item
              for(let key in item){
                return item[key]
              }
            }
        })
    },
  },
  mounted(){
      const dealWithData = Tablist?.data?.entities  ? JSON.parse(JSON.stringify(Tablist?.data?.entities)) : ''
      const getListKey = dealWithData.map((item) => {
              for(let key in item ){
                  return key
              }
            })
      const tableKey =  Tablist?.data?.tableProperty  ? Object.keys(Tablist?.data?.tableProperty) : ''
      const newTab = []
      this.tabObj = getListKey.map((item)=> {
         for(let key in Tablist?.data?.tableProperty){
             if(key == item){
             return ({
                [key]: Tablist?.data?.tableProperty[key]
             })
           }
         }
      })
    this.newTabList=(JSON.parse(JSON.stringify(Tablist?.data?.entities))|| []).filter((item, index)=> {
        for(let key in item){
          this.newLength.push(
            item[key].length
          )
          if(index==this.activeName){
            return item[key]
          }
        }
    })
  }
}
</script> 

<style lang="less" scoped>
ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>