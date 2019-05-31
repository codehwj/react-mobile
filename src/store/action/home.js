import DataClass from 'jscommon/DataClass';
import { arrarTurnObject } from 'jscommon/common'

let dataSource = {};
export function loadStoreListView() {
  return (dispatch, getState) => {
    return new Promise(async resolve => {
      DataClass.mockdata('/goods/getAllGoods', {}).then(response => {
        let data = response.data;
        let lastLength = Object.keys(dataSource).length
        let obj = arrarTurnObject(data, lastLength);
        dataSource = { ...dataSource, ...obj };
        const homeStoreList = {
          dataSource: dataSource,
          isLoading: false
        };
        dispatch({ type: 'SET_HOME_LISTVIEW', homeStoreList: homeStoreList });
        console.log(dataSource);
        resolve(homeStoreList);
      })
    })
  }
}