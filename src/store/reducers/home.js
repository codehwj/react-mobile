
import merge from 'lodash/merge'
import { HOME } from '../mutation-types'

export default function () {
  const initialState = {};
  return function home(state = initialState, action) {
    switch (action.type) {
      case HOME.SET_HOME_RESULT:
        return merge({}, state, action.payload);
      case HOME.SET_HOME_LISTVIEW:
        return merge({}, state, action.payload);
      case HOME.SET_CAROUSEL_DATA:
        return merge({}, state, action.payload);
      case HOME.SET_ALL_GRID:
        return merge({}, state, action.payload);
      case HOME.CLEAN:
        return merge({}, initialState, {});
      default:
        return state;
    }
  }
}