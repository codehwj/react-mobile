import DataClass from 'jscommon/DataClass';
import { arrarTurnObject } from 'jscommon/common'
import { HOME } from '../mutation-types'
import { ListView } from 'antd-mobile';

let dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});
let listData = {};
export function loadStoreListView() {
  return (dispatch, getState) => {
    DataClass.mockdata('/goods/getAllGoods', {}).then(response => {
      let data = response.data;
      let lastLength = Object.keys(listData).length || 0;
      let obj = arrarTurnObject(data, lastLength);
      listData = { ...listData, ...obj };
      console.log(listData);
      dataSource = dataSource.cloneWithRows(listData);
      const homeStoreList = {
        dataSource: dataSource,
        isLoading: false
      };
      dispatch({ type: HOME.SET_HOME_LISTVIEW, payload: homeStoreList });
    })
  }
}

export function loadCarouselData() {
  return (dispatch, getState) => {
    DataClass.mockdata('/carousel/getAllCarousel', {}).then(response => {
      dispatch({ type: HOME.SET_CAROUSEL_DATA, payload: { carouselData: response }});
    })
  }
}

export function loadGridData() {
  return (dispatch, getState) => {
    DataClass.mockdata('/grid/getAllGrid', {}).then(response => {
      dispatch({ type: HOME.SET_ALL_GRID, payload: { gridData: response } });
    })
  }
}