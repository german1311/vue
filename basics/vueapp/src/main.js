// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
// import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import Users from './components/users'
import Test from './components/test'

Vue.use(vueResource)
Vue.use(VueRouter)

// Vue.config.productionTip = false

const router = new VueRouter({
  mode:  'history',
  base: __dirname,
  routes:[
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
});

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // template: '<App/>',
  template:  `
    <div id="app">
      <ul>
        <li><router-link to="/">users</router-link></li>
        <li><router-link to="/test">test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,
  // components: { App }
}).$mount('#app')
