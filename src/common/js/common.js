
export function arrarTurnObject(array, tag) {
  // let arr = Array.prototype.toString.call(this);
  let arr = array.slice();
  let obj = {};
  if (Object.prototype.toString.call(array) !== '[object Array]' || arr.length === 0) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    obj[tag + i] = arr[i]
  }


  return obj;
}