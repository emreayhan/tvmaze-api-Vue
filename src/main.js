import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import List from './list.vue'
import Details from './details.vue'

Vue.use(Router)

const routes = [
  {path: '/', component: List},
  {path: '/:id', component: Details},
]

const router = new Router({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
