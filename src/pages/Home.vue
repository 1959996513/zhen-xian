<template>
   <div>

    <!--头部-->
     <van-row type="flex" class="hander" justify="space-around"   align='center'>
       <van-col span="6" style='padding-left: 30px'>
         <a href="">
           <span style="color:#ffffff;font-size: 24px;">郑州</span>
           <img src="../img/定位选择按钮@2x.png" alt="" style="width: 18px; height: 9px;">
         </a>
       </van-col>
       <van-col span="6" style=" width:420px; position: relative;">
         <input type="text"  style=" width: 420px; height: 52px; border-radius: 30px;border: 0;">
         <div style="position: absolute; top: 10px;height: 28px;left: 130px;">
         <img src="../img/搜索按钮@2x.png" alt="" style="height: 28px;">
         <span style="color: #999999;font-size: 24px;line-height: 28px;">搜索商品</span>
         </div>
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

     <van-row type="flex"style="text-align: center;padding-top: 50px; margin-bottom: 50px;">
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
     <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-bottom: 40px"></div>
     <!--新品推荐-->
     <van-row type="flex" justify="center">
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
       <van-col style="font-size: 32px;font-family:'粗体';color: #222222 ;margin: 0 9px">新品推荐</van-col>
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
     </van-row>
     <van-row type="flex" justify="center">
       <van-col style="font-size: 20px;font-family: PingFang-SC-Medium;color: #666666;margin:20px 0 30px 0 ">New Arrivals</van-col>
     </van-row>
     <!--轮播-->
     <van-swipe style="margin-left: 30px" >
       <van-swipe-item style="width: 530px;height: 300px;margin-right: 20px">
         <img src="../assets/新品推荐大图@2x.png" alt="">
       </van-swipe-item>
       <van-swipe-item style="height: 258px;margin-top: 21px;">
         <img src="../assets/新品推荐小图@2x.png" alt="" height=258px>
       </van-swipe-item>
       <div class="custom-indicator" slot="indicator"></div>
     </van-swipe>
     <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>

     <!--拼团推荐-->
     <van-row type="flex" justify="center" style="padding-top: 40px;">
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
       <van-col style="font-size: 32px;font-family:'粗体';color: #222222;margin: 0 9px">拼团推荐</van-col>
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
     </van-row>
     <van-row type="flex" justify="center">
       <van-col style="font-size: 20px;font-family: PingFang-SC-Medium;color: #666666;margin:20px 0 29px 0 ">Preferential recommendation</van-col>
     </van-row>
     <van-row type="flex">
       <van-col style="margin-left: 50px">
         <img src="../assets/拼团图1@2x.png" alt="" class="imgBug">
       </van-col>
       <van-row style="margin-left: 30px; margin: auto 0">
         <van-row>
           <van-col style="font-size: 28px;font-family: PingFang-SC-Medium;color: #222222 ">澳大利亚巴尔曼闸蟹</van-col>
         </van-row>
         <van-row>
           <van-col style="font-size: 20px;font-family: PingFang-SC-Medium;color: #666666;margin: 20px 0 30px 0">Australian Balmain Bug</van-col>
         </van-row>
         <van-row style="font-size: 28px;font-family: PingFang-SC-Medium;color: #ff9232">￥ 100.00</van-row>
       </van-row>
     </van-row>

     <van-row style="margin-top: 20px" type="flex" justify="end">
       <van-row style="margin-left: 30px;margin: auto 0">
         <van-row>
           <van-col style="font-size: 28px;font-family: PingFang-SC-Medium;color: #222222 ">新西兰特色牛油果</van-col>
         </van-row>
         <van-row>
           <van-col style="font-size: 20px;font-family: PingFang-SC-Medium;color: #666666;margin: 20px 0 30px 0">New Zealand avocados</van-col>
         </van-row>
         <van-row style="font-size: 28px;font-family: PingFang-SC-Medium;color: #ff9232">￥ 100.00</van-row>
       </van-row>
       <van-col style="margin:0 50px 0 30px">
         <img src="../assets/拼团2@2x.png" alt="" class="imgAvocados">
       </van-col>
     </van-row>
     <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>
   </div>
</template>

<script>
    export default {
        name: "Home"
    }


</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #newProduct{
    width: 750px;
    margin-top: 40px;
  }
  .imgBug{
    width: 335px;
    height: 250px;
  }
  .imgAvocados {
    width: 315px;
    height: 250px;
  }

  .hander{
  background-color: rgba(255,255,255,0);

  height: 88px;
  font-size: 24px;

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
  }
</style>
