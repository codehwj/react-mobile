import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Routers from '../router/router'
import configureStore from '../store';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routers></Routers>
        </Provider>
      </div>
    );
  }
}

export default App;
