import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import './common/css/default.css'
import App from './index/App';
import * as serviceWorker from './index/serviceWorker';
import './mock'

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
