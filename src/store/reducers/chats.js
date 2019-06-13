import merge from 'lodash/merge';
import { CHATS } from '../mutation-types';

export default function () {
  const initialState = {};
  return function chats(state = initialState, action) {
    switch (action.type) {
      case CHATS.GET_CHATS_LIST:
        return merge({}, state, action.payload);
      case CHATS.CLEAR:
        return merge({}, initialState, {});
      default:
        return state;
    }
  }
}