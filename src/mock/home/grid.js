import Mock from 'mockjs';

const Random = Mock.Random;

let data = [];


for(let i = 0; i < 9; i ++) { // 可自定义生成的个数
  let template = {
    'icon': 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    'text': Random.string('upper', 5)

  }
  data.push(template)
}


export default data;
