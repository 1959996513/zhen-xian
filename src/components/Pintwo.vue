<template>
  <div>
    <img :src="'/static/'+t.src" alt="">
    <span style="  display: block;font-size: 28px;color: rgb(34,34,34);margin: 30px 0 20px 30px;">{{t.name}}</span>
    <span style="  display: block;font-size: 20px;color: rgb(69,146,7);padding-bottom:50px;  margin-left: 30px;">{{t.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "Pintwo",
    props:['t']
  }
</script>

<style scoped>
 span{

 }
</style
