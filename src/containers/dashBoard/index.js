import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom';
import Home from '../home'
import Chats from '../chats'
import Info from '../info'
import User from '../user'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../../components/nav-link-bar/nav-link-bar';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(h) {
    const { pathname } = this.props.location;
    const navList = [
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
        text:'信息',
        icon:'msg',
        title:'信息',
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
    ]
    
    return (
      <div>
        {
          pathname !== '/' ? 
          <NavBar mode="dark" className="fixed-header">
            {
              navList.find(v => v.path === pathname).title
            }
          </NavBar> : null
        }
        <div style={{marginTop:55,marginBottom:45}}>
          <Switch>
            {
              navList.map(v=>(
                <Route key={v.path} path={v.path} component={v.component}></Route>
              ))
            }
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default DashBoard