export default {
    state: {
        // 是否展开的变量
        isCollapse: false,
        meunData: []
    },
    // getter类似计算属性
    // getters: {
    //     isFold(state){
    //         console.log(state, 'stateisFold')
    //         return state.isCollapse
    //     }
    // },
    // 在(mutations)中定义一个改变state里面的方法
    mutations: {
        isCollapseMenu2(state){
            console.log(state.isCollapse, 'state.isCollapse', !state.isCollapse)
            state.isCollapse = !state.isCollapse
            console.log(state.isCollapse, 'state.isCollapsestate.isCollapse13')
        }
        // [isCollapseMenu2](state){
        //     state.isCollapse = !state.isCollapse
        // }
    }
}