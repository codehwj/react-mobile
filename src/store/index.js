import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer(),
    initialState,
    compose(
      applyMiddleware(thunk),
      // window.devToolsExtension ? window.devToolsExtension() : f=>f
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
    )
  );

  return store;
}
