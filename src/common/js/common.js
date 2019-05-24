




export function arrarTurnObject(arr, tag) {
  const newArr = arr.slice();
  let obj = {};
  for (let i = 0; i < newArr.length; i++) {
    obj[tag+i] = newArr[i]
  }
  return obj;
}