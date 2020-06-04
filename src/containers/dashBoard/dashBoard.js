import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../../components/nav-link-bar/nav-link-bar';
import { Redirect } from 'react-router-dom'
import { routeConfig } from '@src/router/dashBoardConfig'

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      higt: window.innerHeight
    };
  }

  componentDidMount() {
    window.onresize = () => {
      setTimeout(() => {
        this.setState({
          higt: window.innerHeight
        })
      }, 500);
    }

  }
  render(h) {
    var { pathname } = this.props.location;
    const { navList, RedirectRouter } = routeConfig;
    console.log(this.higt);
    
    return (
      <div style={{ position: "reletive" }}>
        {
          pathname !== '/' ?
            <NavBar mode="dark" className="absolute-header">
              {
                navList.find(v => v.path === pathname).title
              }
            </NavBar> : null
        }
        {
          pathname === "/" ? <Redirect to={RedirectRouter}></Redirect> : null
        }
        <div style={{ paddingTop: 45, paddingBottom: 70, height: this.state.higt }}>
          <div style={{position:"relative",height: "100%", width: "100%"}}>
            <Switch>
              {
                navList.map(v => (
                  <Route key={v.path} path={v.path} component={v.component}></Route>
                ))
              }
            </Switch>
          </div>

        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default DashBoard