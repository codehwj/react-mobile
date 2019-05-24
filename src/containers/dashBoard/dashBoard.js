import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom';
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../../components/nav-link-bar/nav-link-bar';
import { Redirect } from 'react-router-dom'
import dashBoardConfig from '@src/router/dashBoardConfig'

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render(h) {
    const { pathname } = this.props.location;
    const {navList, RedirectRouter} = dashBoardConfig;
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
        {
          pathname === "/" ? <Redirect to={RedirectRouter}></Redirect> : null
        }
        <div style={{marginTop:45,marginBottom:45}}>
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