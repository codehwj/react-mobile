import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import DashBoard from '../containers/dashBoard/dashBoard'
import Register from '../containers/register/register'
import Login from '../containers/login/login'
import GoodsDetail from '../containers/goods-detail/goods-detail'

class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(h) {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="/goodsDetail/:goodsId" component={GoodsDetail}></Route>
            <Route component={DashBoard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routers