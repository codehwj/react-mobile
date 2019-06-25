// import DataClass from 'jscommon/DataClass';
import { CLASSITY } from '../mutation-types';

const category = [
  {
    "pinyinName": "yanchanghui",
    "title": "\u6f14\u5531\u4f1a",
    "isCustom": 0,
    "code": "4000"
  },
  {
    "pinyinName": "huajugeju",
    "title": "\u8bdd\u5267\u6b4c\u5267",
    "isCustom": 0,
    "code": "5000"
  },
  {
    "pinyinName": "xiuxianyule",
    "title": "\u4f11\u95f2\u5a31\u4e50",
    "isCustom": 0,
    "code": "B000"
  },
  {
    "pinyinName": "film",
    "title": "\u7535\u5f71",
    "isCustom": 0,
    "code": "C000"
  },
  {
    "pinyinName": "tiyusaishi",
    "title": "\u4f53\u80b2\u8d5b\u4e8b",
    "isCustom": 0,
    "code": "A000"
  },
  {
    "pinyinName": "ertongqinzi",
    "title": "\u513f\u7ae5\u4eb2\u5b50",
    "isCustom": 0,
    "code": "7000"
  },
  {
    "pinyinName": "yinyuehui",
    "title": "\u97f3\u4e50\u4f1a",
    "isCustom": 0,
    "code": "6000"
  },
  {
    "pinyinName": "quyizaji",
    "title": "\u66f2\u827a\u6742\u6280",
    "isCustom": 0,
    "code": "9000"
  },
  {
    "pinyinName": "wudaobalei",
    "title": "\u821e\u8e48\u82ad\u857e",
    "isCustom": 0,
    "code": "8000"
  }
]

/**
 * @description 设置分类的种类
 */
export function setClassifyCategory () {
  return async dispatch => {
    dispatch({ type: CLASSITY.SET_CLASSITY_CATEGORY, payload: {categorys: category}})
  }
}
