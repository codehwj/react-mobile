import merge from 'lodash/merge';
import { CLASSITY } from '../mutation-types';

export default function () {
  const initialState = {};
  return function classify(state = initialState, action) {
    switch (action.type) {
      case CLASSITY.SET_CLASSITY_CATEGORY:
        return merge({}, state, action.payload);
      case CLASSITY.CLEAR:
        return merge({}, initialState, {});
      default:
        return state;
    }
  }
}