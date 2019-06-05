import DataClass from 'jscommon/DataClass';
import { arrarTurnObject } from 'jscommon/common'
import { HOME } from '../mutation-types'

let dataSource = {};
export function loadStoreListView() {
  return (dispatch, getState) => {
    return new Promise(async resolve => {
      DataClass.mockdata('/goods/getAllGoods', {}).then(response => {
        let data = response.data;
        let lastLength = Object.keys(dataSource).length;
        let obj = arrarTurnObject(data, lastLength);
        dataSource = { ...dataSource, ...obj };
        const homeStoreList = {
          dataSource: dataSource,
          isLoading: false
        };
        dispatch({ type: HOME.SET_HOME_LISTVIEW, payload: homeStoreList });
        resolve(homeStoreList);
      })
    })
  }
}
// export function loadStoreListView() {
//   return (dispatch, getState) => {
//     console.log(getState())
//     DataClass.mockdata('/goods/getAllGoods', {}).then(response => {
//       let dataSource = getState().home.dataSource || {};
//       let data = response.data;
//       let lastLength = Object.keys(dataSource).length || 0;
//       let obj = arrarTurnObject(data, lastLength);
//       dataSource = { ...dataSource, ...obj };
//       const homeStoreList = {
//         dataSource: dataSource,
//         isLoading: false
//       };
//       dispatch({ type: HOME.SET_HOME_LISTVIEW, payload: homeStoreList });
//     })
//   }
// }

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