<template>
   <div>

    <!--头部-->
     <van-row type="flex" class="hander" justify="space-around"  align='center'>
       <van-col span="6" style='padding-left: 30px'>
         <a href="">
           <span style="color:#ffffff;font-size: 24px;">郑州</span>
           <img src="../img/定位选择按钮@2x.png" alt="" style="width: 18px; height: 9px;">
         </a>
       </van-col>
       <van-col span="6" style="width: 420px; height: 52px;">
         <form action="/">
           <van-search placeholder="搜索商品" style="border-radius:80px; color: #999999;"/>
         </form>
       </van-col>
       <van-col span="6" style="margin-right: 32px;">
         <a href="" style="float: right;">
           <img src="../img/xiaoxi.png" alt="" style="width: 26px; height: 26px;">
         </a>
       </van-col>
     </van-row>

     <van-swipe :autoplay="3000" class="lun">
       <van-swipe-item><img src="../img/baaner@2x.png" alt=""></van-swipe-item>
       <van-swipe-item><img src="../img/baaner@2x.png" alt=""></van-swipe-item>
       <van-swipe-item><img src="../img/baaner@2x.png" alt=""></van-swipe-item>
       <van-swipe-item><img src="../img/baaner@2x.png" alt=""></van-swipe-item>
     </van-swipe>

     <van-row type="flex"style="text-align: center;padding-top: 50px;">
       <van-col span="6" style="padding-left: 85px;">
         <img src="../img/分类图标@2x.png" alt="" style="width: 80px;height: 80px;">
         <div>分类</div>
       </van-col>
       <van-col span="6" style="margin:0px  170px;">
         <img src="../img/拼团图标@2x.png" alt="">
         <div>分类</div>
       </van-col>
       <van-col span="6" style="padding-right:85px;">
         <img src="../img/特惠专区图标@2x.png" alt="">
         <div>分类</div>
       </van-col>
     </van-row>


   </div>
</template>

<script>
    export default {
        name: "Home"
    }
   console.log(document.getElementsByClassName("hander").clientTop);

</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
.hander{
  background-color: rgba(255,255,255,0);

  height: 88px;
  font-size: 24px;
  line-height: 88px;
  color: #ffffff;
  position: fixed;
  width: 100%;
  overflow: hidden;
  z-index: 99;
}
.lun{
  width: 100%;
}
  .lun img{
    width: 100%;
    height: 408px;
  ;
  }
</style>
