<template>
  <div class="zhu" style="display: flex;justify-content: space-around;background-color: #6f7180;">
    <div >
    <div v-for='lists of list1' :key='' to='' style="margin-top: 20px;background-color: #f2f2f2;border-radius: 20px;">
      <Pinone :o='lists'></Pinone>
    </div>
    </div>
    <div>
    <div v-for='lists of list2' :key='' to='' style="margin-top: 20px;background-color: #f2f2f2;border-radius: 20px;">
      <Pintwo :t='lists'></Pintwo>
    </div>
  </div>
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

        ]
      }
     }
  }
</script>

<style scoped>

</style>
