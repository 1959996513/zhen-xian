import Vue from 'vue'
import Router from 'vue-router'





//路由懒加载
const Home = resolve=>{
  require.ensure(['pages/Home.vue'],()=>{
    resolve(require('pages/Home.vue'));
  })
}
const Shop = resolve=>{
  require.ensure(['pages/Shop.vue'],()=>{
    resolve(require('pages/Shop.vue'));
  })
}
const Cluster = resolve=>{
  require.ensure(['pages/Cluster.vue'],()=>{
    resolve(require('pages/Cluster.vue'));
  })
}
const My = resolve=>{
  require.ensure(['pages/My.vue'],()=>{
    resolve(require('pages/My.vue'));
  })
}
const Find = resolve=>{
  require.ensure(['pages/Find.vue'],()=>{
    resolve(require('pages/Find.vue'));
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },{
      path:'/find',
      component:Find
    },
    {
      path:'/shop',
      component:Shop
    },{
    path:"/my",
      component:My
    },
    {
      path:"/cluster",
      component:Cluster
    }


  ]
})
