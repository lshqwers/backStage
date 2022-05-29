<template>
  <div class="hello">
   <el-radio v-model="radio" label="1">备选项1</el-radio>
   <el-radio v-model="radio" label="2">备选项2</el-radio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      radio: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
