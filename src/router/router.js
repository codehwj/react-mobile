import React, { Component } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import DashBoard from '../containers/dashBoard/dashBoard'
import Register from '../containers/register/register'
import Login from '../containers/login/login'
// import GoodsDetail from '../containers/goods-detail/goods-detail'

class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(h) {
    return (
      <HashRouter>
        <Switch>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          {/* <Route path="/goodsDetail/:goodsId" component={GoodsDetail}></Route> */}
          <Route component={DashBoard}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default Routers