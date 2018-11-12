<template>
   <div>

    <!--头部-->
     <van-row type="flex" class="hander" justify="space-around"   align='center'>
       <van-col span="6" style='padding-left: 30px'>
         <a href="">
           <span style=" color: #222222;font-size: 24px;">郑州</span>
           <img src="../img/xiala.png" alt="" style="width: 18px; height: 9px;">
         </a>
       </van-col>


           <van-field
             label="搜索商品"
             left-icon="find"
             span="6" style="display: flex;align-items: center; width:420px;height: 52px; border: 1px solid #222222;border-radius: 25px;padding-left: 80px;font-size: 22px;color: #999999;"

           />


       <van-col span="6" style="margin-right: 32px;">
         <a href="" style="float: right;">
           <img src="../img/xiaoxi1.png" alt="" style="width: 26px; height: 26px;">
         </a>
       </van-col>
     </van-row>

     <van-swipe :autoplay="3000" class="lun" style="padding-top: 88px;">
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
         <div>拼团</div>
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
     <el-carousel  type="card" height="270px">
       <el-carousel-item>
         <img src="../assets/新品推荐大图@2x.png" alt="" width=370 height=250>
       </el-carousel-item>
       <el-carousel-item>
         <img src="../assets/新品推荐小图@2x.png" alt="" width=370 height=250>
       </el-carousel-item>
       <el-carousel-item>
         <img src="../assets/图1.png" alt="" width=370 height=250>
       </el-carousel-item>
       <el-carousel-item>
         <img src="../assets/图2.png" alt="" width=370 height=250>
       </el-carousel-item>
     </el-carousel>

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

     <!--特惠推荐-->

     <van-row type="flex" justify="center" style="padding-top: 40px;">
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
       <van-col style="font-size: 32px;font-family:'粗体';color: #222222;margin: 0 9px">特惠推荐</van-col>
       <van-col style="width: 80px;height: 1px;background-color: #222222;margin: auto 0"></van-col>
     </van-row>

     <van-row type="flex" justify="center">
       <van-col style="font-size: 20px;font-family: PingFang-SC-Medium;color: #666666;margin:20px 0 29px 0 ">Collage recommendation</van-col>
     </van-row>
     <van-row type="flex" style=" height:450px ;">
       <van-col style="box-shadow: 5px 6px 10px #f2f2f2;border-radius: 11px;">
         <img src="../img/特惠推荐1@2x.png" class="tehuitu1" alt="">
         <p class="p1">巴黎情人甜点</p>
         <p class="p2">￥ 88.00</p>
       </van-col>
       <van-col style="box-shadow: 5px 6px 10px #f2f2f2; height:450px;border-radius: 11px;">
         <img src="../img/特惠专区图2@2x.png" class="tehuitu2" alt="">
         <p class="p3">荷兰卡尔瓦多斯</p>
         <p class="p4">￥ 290.00</p>
       </van-col>
     </van-row>

     <van-row type="flex" >
       <van-col style="box-shadow: 5px 6px 10px #f2f2f2;margin-top: 30px; margin-bottom: 120px;height:450px;border-radius: 11px;">
         <img src="../img/特惠专区图3@2x.png" class="tehuitu1" alt="">
         <p class="p1">西班牙Oroblanco</p>
         <p class="p2">￥ 120.00</p>
       </van-col>
       <van-col style="box-shadow: 5px 6px 10px #f2f2f2;margin-top: 30px; margin-bottom: 120px;height:450px;border-radius: 11px;">
         <img src="../img/特惠专区图4@2x.png" class="tehuitu2" alt="">
         <p class="p3">云南蒙自黑加仑</p>
         <p class="p4">￥ 50.00</p>
       </van-col>
     </van-row>
     <!--尾部-->
     <van-tabbar style="height:98px;margin-top:30px;z-index: 9;">
       <van-tabbar-item style="text-align:left;  width: 188px;">

         <img class="image" src="../img/首页点击时@2x.png"  />
         <p class="p">首页</p>
       </van-tabbar-item>

       <!--2-->

       <van-tabbar-item to='/find'  style="  width: 188px;" >

         <img class="image" src="../img/发现未点击时@2x.png"
         >
         <p class="p">发现</p>
       </van-tabbar-item>

       <!--3-->

       <van-tabbar-item style="  width: 188px;" to="/shop">

         <img class="image"
              src="../img/购物车未点击时@2x.png"
         >
         <p class="p">购物车</p>
       </van-tabbar-item>
       <!--4-->

       <van-tabbar-item style="text-align:right;  width: 188px;" to="/my">

         <img class="image" src="../img/我的未点击时@2x.png" />
         <p class="p">我的</p>
       </van-tabbar-item>

     </van-tabbar>

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
  background-color: rgb(255,255,255);

  height: 88px;
  font-size: 24px;
  color: #999999;
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

  .p1{
    font-family: "PingFang SC";
    margin-left: 60px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 28px;
    color: #222222;
    height: 24px;
  }

  .p2{
    margin-top: 0;
    font-family: "PingFang SC";
    margin-left: 60px;
   padding-bottom: 30px;
    font-size: 28px;
    color: #ff9232;
    height: 24px;
  }
  .p3{
    font-family: "PingFang SC";
    margin-left:60px ;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 28px;
    color: #222222;
    height: 24px;
  }
  .p4{
    margin-top: 0;
    font-family: "PingFang SC";
    margin-left: 60px;
    margin-bottom: 30px;
    font-size: 28px;
    color: #ff9232;
    height: 24px;
  }
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
    width: 44px;
    height: 44px;
    margin-top: 14px;
  }
  .el-carousel__item{
    width: 370px;
    height: 250px;
    margin: 0;
    box-shadow: 0 6px 10px #f2f2f2;
  }

</style>
