<template>
  <div class="main">
      <div class="change">
        <img :src="'/static/img/'+m.sr" alt="">
        <p>{{m.name}}</p>
        <p>{{m.people}}关注</p>
        <button style="width: 120px;height:40px;line-height: 40px;font-size: 24px;background-color: #ff9232;border: none;border-radius: 5px;color: #ffffff;">+关注</button>
      </div>
  </div>
</template>

<script>
    export default {
      props:['m'],
        name: "Guan"
    }
</script>

<style scoped>
  .main{
    background-color: #ffffff;
   margin: 20px 20px;
    border-radius: 15px;
    text-align: center;
  }
  .main:first-child{
    margin-left: 0;
  }
  .main p:nth-child(2){
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: #222222;
  }
  .main p:nth-child(3){
    margin: 10px 0 20px 0;
    font-size: 20px;
    color: #999999;
  }
  .main img{
    margin-top: 50px;
  }

.change{
  width: 270px;
  height: 354px;
  /*display: inline-block;*/

}
</style>
