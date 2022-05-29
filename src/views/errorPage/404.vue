<template>
  <div class="contentImage">
      <div>请输入检查您输入的网址是否正确</div>
      <a @click="backToHome" class="backHome">返回首页</a>
      <img :src="images" class="imgStyle" />
  </div>
</template>

<script>
import imagesFour from '@/assets/images/404.png'
export default {
  name: 'page401',
  data(){
      return {
          images: imagesFour
      }
  },
  methods: {
      backToHome(){
          this.$router.push('/')
      }
  },
  computed: {
      message(){
          return 'sorry, 没有权限'
      }
  }
}
</script>

<style>
.contentImage{
    height: 100%;
    position: relative;
}
.backHome{
    cursor: pointer;
}
.imgStyle{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    /* height: 100%; */
    /* background-size: 100% 100%; */
    background-size: cover;
    transform: translate(-50%, -50%);
}
</style>