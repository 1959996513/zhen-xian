<template>
  <div>
    <!--//头部-->
    <van-tabs v-model="active" class="hander">
      <van-tab title="推荐">
        <!--前两部分-->
        <van-row type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../img/头像1@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">造物者独木夕</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-05</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../img/关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">樱花酸奶+水果, 包裹住味蕾的甜蜜味道。</van-col>
        </van-row>
        <van-row style="margin: 0 50px">
          <van-col style="width: 420px;height: 412px">
            <img src="../img/樱花酸奶图1@2x.png" alt="">
          </van-col>
          <van-col style="margin-left: 20px">
            <van-row style="margin-bottom: 10px;width:210px; height:201px">
              <img src="../img/樱花酸奶图2@2x.png" alt="" >
            </van-row>
            <van-row style="width: 210px;height: 201px">
              <img src="../img/樱花酸奶图3@2x.png" alt="">
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../img/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">2569</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../img/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">25</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../img/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">1197</van-col>
          </van-row>
        </van-row>
        <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>


        <!--第二张-->


        <van-row   type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../img/头像2@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">杨芷的时光</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-03</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../img/关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">早餐怎么吃才健康？</van-col>
        </van-row>
        <van-row style="margin: 0 50px">
          <van-col style="width: 650px;height: 300px">
            <div class="xiangdui"><img src="../img/图4@2x.png" alt="">
              <img src="../img/悬浮+@2x.png" class="juedui" alt="">
              <img src="../img/形状2@2x.png" class="juedui2" alt="">
            </div>
          </van-col>


        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../img/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">789</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../img/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">68</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../img/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">745</van-col>
          </van-row>
        </van-row>


        <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>
        <!--第三张-->
        <van-row type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../img/头像3@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">做一只精致的猪猪女</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-01</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../img/关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">这样做鱼肉不腥还特别鲜美。</van-col>
        </van-row>
        <van-row style="margin: 0 50px">
          <van-col style="width: 650px;height: 300px">
            <div class="xiangdui">
              <img src="../img/3a0d34ae60783c24ce406174fef12b2ec5ef9bf710f473-b07yR1_fw658@2x.png" alt="">
              <img src="../img/形状2@2x.png" class="juedui2" alt="">
            </div>
          </van-col>


        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../img/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">3423</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../img/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">78</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../img/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">1647</van-col>
          </van-row>
        </van-row>

      </van-tab>
      <van-tab title="晒单">
        <van-row type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../assets/shaidan/头像1@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">喵先生呀</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-05</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../assets/shaidan/已关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">粉色少女系的美食来啦!</van-col>
        </van-row>
        <van-row style="margin: 0 50px">
          <van-col style="width: 420px;height: 412px">
            <img src="../assets/shaidan/图1.png" alt="">
          </van-col>
          <van-col style="margin-left: 20px">
            <van-row style="margin-bottom: 10px;width:210px; height:201px">
              <img src="../assets/shaidan/图2@2x.png" alt="" >
            </van-row>
            <van-row style="width: 210px;height: 201px">
              <img src="../assets/shaidan/图3@2x.png" alt="">
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../assets/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">1269</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../assets/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">25</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../assets/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">197</van-col>
          </van-row>
        </van-row>
        <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>

        <van-row type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../assets/shaidan/头像2@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">Crush-v</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-05</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../assets/shaidan/关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">西餐也可以很简单。</van-col>
        </van-row>
        <van-row style="margin: 0 50px;position: relative">
          <img src="../assets/shaidan/悬浮+@2x.png" alt="" style="position: absolute;right: -20px;top:-35px">
          <van-col style="width: 420px;height: 412px">
            <img src="../assets/shaidan/图4@2x.png" alt="">
          </van-col>
          <van-col style="margin-left: 20px">
            <van-row style="margin-bottom: 10px;width:210px; height:201px">
              <img src="../assets/shaidan/图5@2x.png" alt="" >
            </van-row>
            <van-row style="width: 210px;height: 201px">
              <img src="../assets/shaidan/图6@2x.png" alt="">
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../assets/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">1269</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../assets/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">25</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../assets/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">197</van-col>
          </van-row>
        </van-row>
        <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>

        <van-row type="flex" justify="space-between" style="margin-top: 40px">
          <van-row style="margin-left: 30px">
            <van-col>
              <img src="../assets/shaidan/头像3@2x.png" alt="">
            </van-col>
            <van-col style="margin: auto 0;margin-left: 20px">
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #222222;margin-bottom: 20px">造物者独木夕</van-col>
              </van-row>
              <van-row>
                <van-col style="font-family: 'PingFang-SC-Medium';font-size: 20px;color: #999999">11-05</van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row style="margin: 12px 30px 0 0">
            <van-col>
              <img src="../assets/shaidan/关注@2x.png" alt="">
            </van-col>
          </van-row>
        </van-row>
        <van-row style="margin: 30px 0 30px 50px">
          <van-col style="font-family: 'PingFang-SC-Medium';font-size: 28px;color: #222222">樱花酸奶+水果, 包裹住味蕾的甜蜜味道。</van-col>
        </van-row>
        <van-row style="margin: 0 50px">
          <van-col style="width: 420px;height: 412px">
            <img src="../assets/shaidan/图7@2x.png" alt="">
          </van-col>
          <van-col style="margin-left: 20px">
            <van-row style="margin-bottom: 10px;width:210px; height:201px">
              <img src="../assets/shaidan/图8@2x.png" alt="" >
            </van-row>
            <van-row style="width: 210px;height: 201px">
              <img src="../assets/shaidan/图9@2x.png" alt="">
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" style="margin-top: 30px">
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px;">
              <img src="../assets/浏览次数@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">2569</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 25px;margin-right: 20px">
              <img src="../assets/评论@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">25</van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col style="width: 28px;height: 24px;margin-right: 20px">
              <img src="../assets/未点赞时@2x.png" alt="">
            </van-col>
            <van-col style="font-family: 'PingFang-SC-Medium';font-size: 24px;color: #999999">1197</van-col>
          </van-row>
        </van-row>
        <div style="width: 750px;height: 20px;background-color: #f2f2f2;margin-top: 50px"></div>
      </van-tab>
      <van-tab title="关注">内容 3</van-tab>
      <van-tab title="食谱">内容 4</van-tab>
    </van-tabs>


    <van-tabbar style="height:98px;margin-top:30px;z-index: 9;">
      <van-tabbar-item to="/">
        <img class="image" src="../img/首页未点击@2x.png"  />
        <p class="p">首页</p>
      </van-tabbar-item>

      <!--2-->

      <van-tabbar-item to='/find'>

        <img class="image"
             slot="icon"
             slot-scope="props"
             :src="props.active ? icon.active : icon.normal"
        >
        <p class="p">发现</p>
      </van-tabbar-item>

      <!--3-->

      <van-tabbar-item to="/shop">

        <img class="image"
             src="../img/购物车未点击时@2x.png"
        >
        <p class="p">购物车</p>
      </van-tabbar-item>
      <!--4-->

      <van-tabbar-item to="/my">

        <img class="image" src="../img/我的未点击时@2x.png" />
        <p class="p">我的</p>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
    export default {
        name: "Find",
      data(){
          return{
         active: 0,
          icon: {
          active: '../static/img/发现未点击时@2x.png',
            normal:'../static/img/发现点击时@2x.png'
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
  .xiangdui{
    position: relative;
  }
  .juedui{
    width: 80px;
    height: 80px;
    position: absolute;
    right: -40px;
    top:-40px;
  }
  .juedui2{
    width: 52px;
    height: 59px;
    position: absolute;
    top:120px;
    right:299px;
  }
</style>
