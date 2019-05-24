import Mock from 'mockjs';

const Random = Mock.Random;

let data = [];

for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
  let template = {
    'id': Random.id(),
    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'img': Random.image('375x200', '#02adea', '?'), // Random.size表示将从size数据中任选一个数据
    'title':Random.word(5), //生成2至5个句子的文本
    'subtitle': Random.word(5)

  }
  data.push(template)
}


export default data;
