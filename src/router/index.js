import Vue from 'vue'
import Router from 'vue-router'





//路由懒加载
const Home = resolve=>{
  require.ensure(['pages/Home.vue'],()=>{
    resolve(require('pages/Home.vue'));
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    }
  ]
})
