import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'

import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import leixing from '@/views/modules/leixing/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xueshengzuoye from '@/views/modules/xueshengzuoye/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import discusskechengxinxi from '@/views/modules/discusskechengxinxi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import discussziliaoxinxi from '@/views/modules/discussziliaoxinxi/list'
    import zuoyexinxi from '@/views/modules/zuoyexinxi/list'
    import forum from '@/views/modules/forum/list'
    import ziliaoxinxi from '@/views/modules/ziliaoxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    },  {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/leixing',
        name: '类型',
        component: leixing
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xueshengzuoye',
        name: '学生作业',
        component: xueshengzuoye
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
    ,{
	path: '/discusskechengxinxi',
        name: '课程信息评论',
        component: discusskechengxinxi
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/discussziliaoxinxi',
        name: '资料信息评论',
        component: discussziliaoxinxi
      }
      ,{
	path: '/zuoyexinxi',
        name: '作业信息',
        component: zuoyexinxi
      }
      ,{
	path: '/forum',
        name: '校园论坛',
        component: forum
      }
      ,{
	path: '/ziliaoxinxi',
        name: '资料信息',
        component: ziliaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }

    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
