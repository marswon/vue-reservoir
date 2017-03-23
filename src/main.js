// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'


Vue.use(ElementUI);
Vue.prototype.$http = Axios 

NProgress.configure({ showSpinner: false });

router.beforeEach((to,from,next) =>{
  const token = localStorage.getItem('demo-token');
  if(to.path == '/'){ // 如果是跳转到登录页的
    if(token != 'null' && token != null){
      next('/first') // 如果有token就转向todolist不返回登录页
    }
    next(); // 否则跳转回登录页
  }else{
    if(token != 'null' && token != null){
      
      Vue.prototype.$http.defaults.headers.common['X-Authorization'] = 'Bearer ' + token; // 注意Bearer后有个空格
      next() // 如果有token就正常转向
    }else{
      next('/') // 否则跳转回登录页
    }
  }
})

router.afterEach(transition => {
NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
