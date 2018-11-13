<template>
    <div>
      <div class="main">
        <img :src="'/static/'+m.sr" alt="">
        <span>{{m.tet}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
      props:['m']
    }
</script>

<style scoped>
  img{
    width: 80px;
    height: 80px;
    margin-top: 50px;
  }
  span{
    display: block;
    text-align: center;
    font-size: 24px;
    color: #222222;
    margin: 30px 0 50px 0;
  }

</style>
