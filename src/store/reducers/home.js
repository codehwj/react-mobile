
import merge from 'lodash/merge'

export default function () {

  const initialState = {};
  return function home(state = initialState, action) {
    switch (action.type) {
      case 'SET_HOME_LISTVIEW':
        state.homeStoreList = action.homeStoreList;
        return merge({}, state, {});
      default:
        return state;
    }
  }
}