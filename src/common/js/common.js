
export function arrarTurnObject(arr, tag) {
  // Object.prototype.toString.call(obj);
  const newArr = arr.slice();
  let obj = {};
  if (Object.prototype.toString.call(obj) !== '[object Array]' ||  arr.length === 0) {
    return
  } 
    for (let i = 0; i < newArr.length; i++) {
      obj[tag+i] = newArr[i]
    }
  
  
  return obj;
}