import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
// import Home from '../containers/home'
// import Chats from '../containers/chats'
// import Info from '../containers/info'
// import User from '../containers/user'
import DashBoard from '../containers/dashBoard/dashBoard'

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
            {/* <Route path="/Home" component={Home}></Route>
            <Route path="/Chats" component={Chats}></Route>
            <Route path="/Info" component={Info}></Route>
            <Route path="/User" component={User}></Route> */}
            <Route component={DashBoard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routers