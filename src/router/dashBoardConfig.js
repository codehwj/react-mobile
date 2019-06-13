
import Home from '../containers/home/home'
import Chats from '../containers/chats/chats'
import Info from '../containers/info/info'
import User from '../containers/user/user'

console.log(Home)
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
      path:'/Chats',
      text:'图表',
      icon:'boss',
      title:'图表',
      component:Chats,
      hide:false
    }, {
      path:'/Info',
      text:'通知',
      icon:'msg',
      title:'通知',
      component:Info,
      hide:false
    }, {
      path:'/User',
      text:'我的',
      icon:'user',
      title:'我的',
      component:User,
      hide:false
    }
  ],
  RedirectRouter: '/Chats'                          // 重定向路由, 没有路由路径时默认执行该路由
}
