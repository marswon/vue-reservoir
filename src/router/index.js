import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Hello from 'components/Hello'
import TodoList from 'components/TodoList'
import First from 'page/First'
import Second from 'page/Second'
import Third from 'page/third'
import MySuperMap from 'map/mysuperMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path:'/todolist',
      component:TodoList
    },
    {
    	path:'/mysupermap',
    	component:MySuperMap
    },
    {
    	path:'/first',
    	component:First,
    	children:[{
    		path:'/second',
    		component:Second
    	},{
    		path:'/third',
    		component:Third,
    	}]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
