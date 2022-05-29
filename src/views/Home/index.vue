<template>
    <div class="contentTable">
        <el-form label-width="100px" :model="FormValue">
            <el-row span="24" :gutter="10">
                <el-col :span="5">
                    <el-form-item label="线索编号1">
                        <el-input v-model="FormValue.inputValue"  style="width: 180px" />
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="线索类型1">
                        <el-select  v-model="FormValue.sizeForm" placeholder="请选择活动区域"  style="width: 180px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="线索来源1">
                        <el-select  v-model="FormValue.area" placeholder="请选择活动区域"  style="width: 160px">
                            <el-option label="广州" value="guangzhou"></el-option>
                            <el-option label="上海" value="shaihai"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6" v-if="!displayContent">
                    <el-form-item label="last线索编号">
                        <el-input v-model="FormValue.inputInfo" style="width: 200px"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8" v-if="displayContent">
                    <el-button type="primary" icon="el-icon-search">查询</el-button>
                    <el-button type="primary" icon="el-icon-refresh">重置</el-button>
                    <el-button type="primary" icon="el-icon-download">下发</el-button>
                    <el-button type="text"  @click="expandEvent(false)">
                        展开搜索<i class="el-icon-arrow-down" style="margin-left: 5px"></i>
                    </el-button>
                </el-col>

            </el-row>
            <el-row span="24" :gutter="20" v-if="!displayContent">
                <el-col :span="5">
                    <el-form-item label="线索编号2">
                        <el-input v-model="FormValue.inputValue2" style="width: 180px"/>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="线索类型2">
                        <el-select  v-model="FormValue.sizeForm2" placeholder="请选择活动区域" style="width: 180px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="线索来源2">
                        <el-select  v-model="FormValue.area2" placeholder="请选择活动区域" style="width: 160px">
                            <el-option label="广州" value="guangzhou"></el-option>
                            <el-option label="上海" value="shaihai"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colStyle">
                    <el-button type="primary" icon="el-icon-search">查询</el-button>
                    <el-button type="primary" icon="el-icon-refresh">重置</el-button>
                    <el-button type="primary" icon="el-icon-download">下发</el-button>
                    <el-button type="text" @click="expandEvent(true)">
                        收起搜索
                        <i class="el-icon-arrow-up" style="margin-left: 5px"></i>
                    </el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row style="display: flex; ">
            <el-col :span="22">
            </el-col>
            <el-col :span="2">
                <el-dropdown  v-if="colSelectArr.length > 0">
                    <i class="el-icon-collection"></i>
                    <el-dropdown-menu slot="dropdown">
                        {{colSelectArr.length > 0 ? '' : '没有数据'}}
                        <!-- <div style="width:20px; height: 20px; background: #fff">没有数据</div> -->
                        <!-- <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item> -->
                        <!-- <el-tooltip content="双皮奶没有了哦"> -->
                        <!-- 
                            作用是数据过多
                         -->
                        <el-checkbox-group v-model="colOptions"  @change="changeGroup">
                            <el-dropdown-item @click.native="resect">重置</el-dropdown-item>
                            <el-dropdown-item v-for="(item, index) in colSelectArr" :key="index">
                               <el-checkbox
                                        :label="item"
                                        :key="item"
                                >
                                    </el-checkbox>
                             </el-dropdown-item>
                        </el-checkbox-group>  
                        <!-- </el-tooltip> -->
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown v-else>
                    <i class="el-icon-collection"></i>
                    <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>没有数据</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-table
          :data="tableData"
          border
          :row-style="{height:'32px'}"
          :header-cell-style="{
                background:'#5E95E8',
                color:'#FFFFFF',
                height:'30px',
                padding:'2px'
           }"
           width="100%"
           ref="tableDataRef"
           class="tableStyle"
           :summary-method="getSummaries"
           show-summary
           height="370"
           @selection-change="handleSelectionChange"
           :row-class-name="checkRowStyle"
        >
        <!-- 
            row-class-name 行的className的回调方法, 也可以使用字符串为所有行设置一个固定的className
            function({row, rowIndex})
        -->
        <el-table-column
           type="selection"
           align="center"
           width="55">
        </el-table-column>
        <el-table-column type="index" width="55" label="序号" align="center"></el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="150"
                align="center"
                v-if="colData[0].istrue"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120"
                align="center"
                v-if="colData[1].istrue"
            >
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份"
                align="center"
                v-if="colData[2].istrue"
            >
            </el-table-column>
            <el-table-column
                prop="city"
                label="市区"
                align="center"
                v-if="colData[3].istrue"
            >
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
                align="center"
                v-if="colData[4].istrue"
            >
            </el-table-column>
            <el-table-column
               label="操作"
               width="100"
               align="center"
            >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
            <!-- <div class="footerStyle"> -->
                <!-- <div slot="append" border>
                    <div style="width: 200px">14123</div>
                    <div style="width: 200px">14w123</div>
                </div>
                <div slot="append">
                    12
                </div> -->
            <!-- </div> -->
        </el-table>
    </div>
</template>

<script>
/*
    设置一个变量,把它显示和隐藏
*/
export default {
    name: 'Home',
    data(){
        return{
            tableData: [
                {
                        id: 1,
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        id: 2,
                        date: '2016-05-04',
                        name: '王小虎1',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                },
                {
                        id: 3,
                        date: '2016-05-02',
                        name: '王小虎2',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                }, {
                        id: 4,
                        date: '2016-05-04',
                        name: '王小虎3',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                },
                {
                        id: 5,
                        date: '2016-05-02',
                        name: '王小虎4',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                }, {
                        id: 6,
                        date: '2016-05-04',
                        name: '王小虎5',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                }, 
            ],
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            colData:[
                {title: "日期", istrue: true},
                {title: "姓名", istrue: true},
                {title: "省份", istrue: true},
                {title: "市区", istrue: true},
                {title: "性别", istrue: true},
            ],
            // colSelectArr: [],
            colOptions: [], // 默认全选
            colSelectArr: [],// 也是所有表头标题
            multipleSelection: [],
            newArr: [],
            FormValue: {
                inputValue: '',
                sizeForm: 'beijing',
                area: 'guangzhou',
                inputInfo: '',
                inputValue2: '',
                sizeForm2: '',
                area2: ''
            },
            displayContent: false
        }
    },
    methods:{
        handleClick(){
            console.log('23')
        },
        changeGroup(groupValues){
            // groupValues.map((itemGroupValue) => {
            //         this.colData.map((itemValue) => {
            //            console.log(itemValue, 'valuehh')
            //         // if(itemGroupValue == itemValue.title){
            //         //     console.log(itemValue, 'itemValueitemValue')
            //         //         // ({
            //         //         //     title: itemGroupValue,
            //         //         //     istrue: true
            //         //         // })
            //         //     }
            //         })
            // })
            // this.colData
            let newArr = []
            this.colData.map((item) => {
                 let itemValue = JSON.parse(JSON.stringify(item||[]))
                  console.log(itemValue.title, 'itemCol', groupValues.includes(itemValue.title))
                  if(groupValues.includes(itemValue.title)){
                    newArr.push(itemValue)
                  }
            })
            // this.colData = JSON.parse(JSON.stringify(newArr))
            console.log(JSON.parse(JSON.stringify(this.colData)), '12JSON.parse(JSON.stringify(this.colData))')
        },
        resect(){
                // this.colOptions = []
                this.colOptions = this.colData.map((item) => item.title)
                console.log(JSON.parse(JSON.stringify(this.colData)), 'JSON.parse(JSON.stringify(this.colData))')
        },
        getSummaries(param) {
            const {
            columns,
            data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
            if (index === 0) {
                sums[index] = (()=>{
                    let el = <div class="count_row" style="border-bottom: 1px solid red; width: 100%;">
                        <div style="border-bottom: 1px solid red; width: 100%;">配送费</div>
                        <div>会员优惠</div>
                    </div>
                    return el;
                })();
                return;
            }
            if (index === 3) {
                sums[index] = (()=>{
                    let num = <p class="count_row">
                        <div>12</div>
                        <div>13</div>
                    </p>
                    return num;
                })();
                return;
            }
        });
        return sums;
        },
        handleSelectionChange(val){
            var arr = [];
            this.multipleSelection = val
            val.forEach((itemVal) => {
                this.tableData.map((item) => {
                    if(itemVal.id  === item.id){
                        this.newArr.push(itemVal)
                        arr.push(itemVal)
                    }
                })
            })
             this.multipleSelection = arr
            // console.log('itemTable', arr)

            // val.forEach((val, index) => {
            //     this.tableData.forEach((v, i) => {
            //         // id是每一行的数据id
            //         if(val.id == v.id){
            //             arr.push(i)
            //         }
            //     })
            // })
            // this.multipleSelection = arr
        },
        checkRowStyle({row, rowIndex}){
            // this.newArr.map((item) => {
            //     if(item.id === rowIndex){
            //         return 'RowStyle'
            //     }
            // })
            let arrList = this.multipleSelection;
            for(let i = 0; i < arrList.length; i++){
                // console.log(rowIndex,  arrList[i], 'z12')
                if(rowIndex+1 === arrList[i].id){
                    return "RowStyle"
                }
            }
        },
        expandEvent(val){
            console.log(val, 'valval')
           this.displayContent = val
        }
    },
    mounted(){
        this.colSelectArr = this.colData.map((item)=> item.title)
        // this.colOptions = this.colData.map((item) => item.title)
        console.log(this.colSelectArr, 'colSelectArrcolSelectArr')
    },
    watch: {
        // 默认全选
        colOptions(valArr){
            // ['日期', '姓名', '省份', '市区', '性别']
            // indexOf
            /*
                colData所有表头标题,
                colOptions是多选框默认全选,
                colSelectArr也是所有表头标题, 只是是跟多选框组绑定的
            */
            var arr = this.colSelectArr.filter(i => valArr.indexOf(i) < 0)
            this.colData.filter((i) => {
                if(arr.indexOf(i.title)!=-1){
                    i.istrue = false;
                } else {
                    i.istrue = true;
                }
            })
            // this.$nextTick(() => {
            //     this.$refs.tableDataRef.daLayout();
            // })
        }
    },
    created(){
         var _this = this
         for(let i = 0; i< _this.colData.length; i++){
             _this.colSelectArr.push(_this.colData[i].title)
             if(_this.colData[i].title == '名称'){// 初始化不想
                continue;
             }
             _this.colOptions.push(_this.colData[i].title)
         }
    }
}
</script>

<style lang="less" scoped>
.contentTable{
    .el-icon-collection{
        font-size: 24px;
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

 .tableStyle{
    position: relative;
    /deep/ .el-table__append-wrapper{
        position: absolute;
        bottom: 0;
  }
}

.count_row2{
    background: red;
}
.el-table {
  overflow-x: auto;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  overflow: visible;
}
.el-table::after {
  position: relative;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: visible;
}
// 没有使用,
/deep/.RowStyle{
    td{
        background: rgb(36, 162, 247) !important;
        z-index: 9999;
    }
}
.colStyle{

}
</style>