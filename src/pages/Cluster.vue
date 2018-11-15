<template>
  <div>
    <span style="position: fixed;top:20px;z-index:99999;font-size: 20px;" @click='clicka'><</span>
    <van-tabs>

      <van-tab title="已结束">
        <div style="padding: 20px 30px 0 30px;background-color: #f2f2f2;display: flex">
          <div style="width: 335px;margin-right: 20px">
            <router-link v-for="endDateLeft of endDateLeft" :key="name" to="" style="width: 335px">
              <div style="margin-bottom: 20px">
                <img :src="'/static/img/regiment/' + endDateLeft.src" alt="" style="display: block">
                <van-row style="padding: 30px 30px 50px 30px;background-color: #ffffff;border-radius: 0 0 15px 15px">
                  <van-row style="font-family:'PingFang-SC-Medium';font-size: 28px;color: rgb(34,34,34) ">{{endDateLeft.name}}</van-row>
                  <van-row type="flex" justify="space-between" style="margin-top: 20px">
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(102,102,102) ">已售{{endDateLeft.number}}件</van-col>
                  </van-row>
                </van-row>
              </div>
            </router-link>
          </div>

          <div style="width: 335px">
            <router-link v-for="endDateRight of endDateRight" :key="name" to="" style="width: 335px">
              <div style="margin-bottom: 20px">
                <img :src="'/static/img/regiment/' + endDateRight.src" alt="" style="display: block">
                <van-row style="padding: 30px 30px 50px 30px;background-color: #ffffff;border-radius: 0 0 15px 15px">
                  <van-row style="font-family:'PingFang-SC-Medium';font-size: 28px;color: rgb(34,34,34) ">{{endDateRight.name}}</van-row>
                  <van-row type="flex" justify="space-between" style="margin-top: 20px">
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(102,102,102) ">已售{{endDateRight.number}}件</van-col>
                  </van-row>
                </van-row>
              </div>
            </router-link>
          </div>
        </div>
      </van-tab>

      <van-tab title="进行中" style="padding-bottom: 26px;">
        <div class="zhu" style="display: flex;justify-content: space-around;background-color:#f2f2f2;margin-top: 20px;">
          <div >
            <div v-for='lists of list1' :key='' to='' style="margin-top: 20px;background-color: #ffffff;border-radius: 20px;">
              <Pinone :o='lists'></Pinone>
            </div>
          </div>
          <div>
            <div v-for='lists of list2' :key='' to='' style="margin-top: 20px;background-color:#ffffff;border-radius: 20px;">
              <Pintwo :t='lists'></Pintwo>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="即将开始">
        <div style="padding: 20px 30px 0 30px;background-color: #f2f2f2;display: flex">
          <div style="width: 335px;margin-right: 20px">
            <router-link v-for="startDateLeft of startDateLeft" :key="name" to="" style="width: 335px">
              <div style="margin-bottom: 20px">
                <img :src="'/static/img/regiment/' + startDateLeft.src" alt="" style="">
                <van-row style="padding: 30px 30px 50px 30px;background-color: #ffffff;border-radius: 0 0 15px 15px">
                  <van-row style="font-family:'PingFang-SC-Medium';font-size: 28px;color: rgb(34,34,34) ">{{startDateLeft.name}}</van-row>
                  <van-row type="flex" justify="space-between" style="margin-top: 20px">
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(69,147,7) ">{{startDateLeft.time}}点开拼</van-col>
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(102,102,102) ">共{{startDateLeft.number}}件</van-col>
                  </van-row>
                </van-row>
              </div>
            </router-link>
          </div>

          <div style="width: 335px">
            <router-link v-for="startDateRight of startDateRight" :key="name" to="" style="width: 335px">
              <div style="margin-bottom: 20px">
                <img :src="'/static/img/regiment/' + startDateRight.src" alt="" style="display: block;z-index: 999;">
                <van-row style="padding: 30px 30px 50px 30px;background-color: #ffffff;border-radius: 0 0 15px 15px">
                  <van-row style="font-family:'PingFang-SC-Medium';font-size: 28px;color: rgb(34,34,34) ">{{startDateRight.name}}</van-row>
                  <van-row type="flex" justify="space-between" style="margin-top: 20px">
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(69,147,7) ">{{startDateRight.time}}点开拼</van-col>
                    <van-col style="font-family:'PingFang-SC-Medium';font-size: 20px;color: rgb(102,102,102) ">共{{startDateRight.number}}件</van-col>
                  </van-row>
                </van-row>
              </div>
            </router-link>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>


</template>

<script>
  import Pinone from '@/components/Pinone'
  import Pintwo from '@/components/Pintwo'
  export default {
    name: "Cluster",
    components:{
      Pinone,
      Pintwo
    },
     data(){
      return{
        list1:[
          {src:'imgs/进行中1_iOS @2x.png',name:'农产土鸡蛋',text:'倒计时:0小时3分3秒'},
          {src:'imgs/即将开始3_iOS @2x.png',name:'遇傃秋葵',text:'倒计时:0小时3分3秒'},
          {src:'imgs/进行中5_iOS @2x.png',name:'香桔换头',text:'倒计时:0小时3分3秒'},

        ],
        list2:[
          {src:'imgs/进行中2_iOS @2x.png',name:'澳洲黑鱼',text:'倒计时:0小时3分3秒'},
          {src:'imgs/进行中4_iOS @2x.png',name:'维尼波多尔红葡萄酒',text:'倒计时:0小时3分3秒'},
          {src:'imgs/进行中6_iOS @2x.png',name:'香桔',text:'倒计时:0小时3分3秒'}
        ],
        startDateLeft:[
          {
            src:"即将开始_iOS@2x.png",
            name:"樱桃酸奶",
            time:"11",
            number:"1200"
          },
          {
            src:"即将开始图3_iOS@2x.png",
            name:"南瓜布丁",
            time:"11",
            number:"1000"
          },
          {
            src:"即将开始图5_iOS@2x.png",
            name:"南自石榴",
            time:"11",
            number:"1000"
          }
        ],
        startDateRight:[
          {
            src:"即将开始图2_iOS@2x.png",
            name:"C度饮品",
            time:"11",
            number:"1000"
          },
          {
            src:"即将开始4_iOS@2x.png",
            name:"进口牛排",
            time:"11",
            number:"1000"
          },
          {
            src:"即将开始图6_iOS@2x.png",
            name:"瘦瘦果",
            time:"11",
            number:"1000"
          }
        ],
        endDateLeft:[
          {
            src:"即将开始_iOS@2x.png",
            name:"澳洲冷鲜牛肉",
            number:"1400"
          },
          {
            src:"即将开始图3_iOS@2x.png",
            name:"澳洲大龙虾",
            number:"2255"
          },
          {
            src:"即将开始图5_iOS@2x.png",
            name:"澳洲玉米粒",
            number:"1100"
          }
        ],
        endDateRight:[
          {
            src:"即将开始图2_iOS@2x.png",
            name:"俄罗斯北极虾",
            number:"2255"
          },
          {
            src:"即将开始4_iOS@2x.png",
            name:"丹麦三文鱼",
            number:"2255"
          }
        ]
      }
     },
    methods:{
      clicka:function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
