<template>
    <div>
        <li v-for="(item) in arr" :key="item.id">
            li - number
        </li>
    </div>
</template>

<script>
export default {
    name: 'Page',
    data(){
        return{
            arr: [
                   {
                       name: [
                           {id: 1, number: 20},
                           {id: 2, number: 40}
                       ]
                   }
                 ]
        }
    }
}
</script>

<style>

</style>