
import Home from '../containers/home/home'
import Classify from '../containers/classify/classify'
import Interest from '../containers/interest/interest'
import User from '../containers/user/user'
import Ticket from '../containers/ticket/ticket'

export const routeConfig = {
  navList : [
    {
      path:'/Home',
      text:'首页',
      icon:'job',
      title:'首页',
      component:Home,
      hide:false
    }, {
      path:'/Classify',
      text:'分类',
      icon:'boss',
      title:'分类',
      component:Classify,
      hide:false
    }, {
      path:'/Interest',
      text:'同趣',
      icon:'msg',
      title:'同趣',
      component:Interest,
      hide:false
    }, {
      path:'/Ticket',
      text:'转票',
      icon:'msg',
      title:'转票',
      component:Ticket,
      hide:false
    }, {
      path:'/User',
      text:'我',
      icon:'user',
      title:'我',
      component:User,
      hide:false
    }
  ],
  RedirectRouter: '/Home'                          // 重定向路由, 没有路由路径时默认执行该路由
}
