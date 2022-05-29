<template>
    <div>
        标题: {{title}}
        内容: {{message}}
    </div>
</template>
<script>
export default{
    data(){
        return{
            title: '',
            message: '',
            duration: 4500
        };
    }
}
</script>
<style scoped>

</style>