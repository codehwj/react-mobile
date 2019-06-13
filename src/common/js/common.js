
/**
 * @author hwj
 * @dete 2019-05-20
 * @description 数组转对象
 */
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
/**
 * @author hwj
 * @dete 2019-05-20
 * @description 数组转对象
 */
export function arrarTurnObject1(arrar) {
  function keyByUsernameReducer(acc, person) {
    return { ...acc, [person.id]: person };
  }
  const obj = arrar.reduce(keyByUsernameReducer, {});
  return obj;
}

/**
 * @author hwj
 * @dete 2019-05-20
 * @description 生成随机色
 */
export function RandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}

/**
 * @author hwj
 * @dete 2019-06-10
 * @param  {[type] object} parent 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
export function clone(parent) {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};

const getRegExp = re => {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    default:
      flag = false;
  }
  return flag;
};


/**
 * @author hwj
 * @dete 2019-06-11
 * @param {fn} 防抖时间间隔结束后执行函数
 * @param {wait} 是时间间隔
 * @description 滚动事件防抖
 */
export function throttle(fn, wait = 50) {

  // previous 是上一次执行 fn 的时间
  // timer 是定时器
  let previous = 0, timer = null

  // 将 throttle 处理结果当作函数返回
  return function (...args) {

    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date()

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
    if (now - previous < wait) {
      // 如果小于，则为本次触发操作设立一个新的定时器
      // 定时器时间结束后执行函数 fn 
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        previous = now
        fn.apply(this, args)
      }, wait)

    } else {
      // 第一次执行
      // 或者时间间隔超出了设定的时间间隔，执行函数 fn
      previous = now
      fn.apply(this, args)
    }
  }
}



