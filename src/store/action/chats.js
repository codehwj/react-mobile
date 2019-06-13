import DataClass from 'jscommon/DataClass';
import { CHATS } from '../mutation-types';

export function getChatsList() {
  return async (dispatch, getState) => {
    const response = await DataClass.mockdata('/chats/getAllCartlist', {});
    console.log(response);
    dispatch({type: CHATS.GET_CHATS_LIST, payload: {chatsList: response.list}})
  }
}