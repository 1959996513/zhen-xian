<template>
<div>
  <h1>我是用户</h1>
  <van-tabbar style="height:98px;margin-top:30px;z-index: 9;">
    <van-tabbar-item to="/">
      <img class="image" src="../img/首页未点击@2x.png"  />
      <p class="p">首页</p>
    </van-tabbar-item>

    <!--2-->

    <van-tabbar-item to='/find'>

      <img class="image" src="../img/发现未点击时@2x.png"
      >
      <p class="p">发现</p>
    </van-tabbar-item>

    <!--3-->

    <van-tabbar-item to="/shop">

      <img class="image" src="../img/购物车未点击时@2x.png"
      >
      <p class="p">购物车</p>
    </van-tabbar-item>
    <!--4-->

    <van-tabbar-item to="/my">

      <img class="image"
           slot="icon"
           slot-scope="props"
           :src="props.active ? icon.active : icon.normal"/>
      <p class="p">我的</p>
    </van-tabbar-item>

  </van-tabbar>
</div>
</template>

<script>
    export default {
        name: "My",
       data(){
          return{
            active: 0,
            icon: {
              active: '../static/img/我的未点击时@2x.png',
              normal: '../static/img/我的点击时@2x.png'
            }
          }
       }
    }
</script>

<style scoped>
  .yinying{
    width: 100%;
    height: 20px;

  }
  .tehuitu1{
    width:335px;
    height: 322px;
    margin-left: 30px;
  }

  .tehuitu2{
    width:335px;
    height: 322px;
    margin-left: 20px;
  }

  .p{

    margin-top: 8px;
    margin-bottom: 12px;
    font-family: "PingFang SC";
    font-size: 20px;
    height: 20px;
    line-height: 20px;

  }
  .image{
    margin-top: 14px;
    width:44px;
    height:44px;
  }
</style>
