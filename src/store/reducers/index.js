import { combineReducers } from 'redux'

import home from './home'
import chats from './chats'

export default (function () {
  
  // 这样处理的目的是，创建store的时候让 initialState 总计是返回新的，
  // 否则 initialState 的数据会持久化，下次创建的时候，初始的数据是之前的数据
  const states = {
    home: home(),
    chats: chats()
  }
  return combineReducers(states);
})
