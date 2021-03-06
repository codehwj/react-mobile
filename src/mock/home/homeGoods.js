import Mock from 'mockjs';

const Random = Mock.Random;
/*
let data = [];
for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
  let template = {
    'Boolean': Random.boolean, // 可以生成基本数据类型
    'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'Range': Random.range(0, 10, 3), // 生成一个随机数组
    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    // 'Image': Random.image(size[Math.floor(Math.random()*size.length)], '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    'img': Random.image('375x200', '#02adea', img_text[Math.floor(Math.random()*img_text.length)]), // Random.size表示将从size数据中任选一个数据
    'Color': Random.color(), // 生成一个颜色随机值
    'title':Random.word(10), //生成2至5个句子的文本
    'des': Random.ctitle(4, 10),   // 说明
    'Name': Random.name(), // 生成姓名
    'Url': Random.url(), // 生成web地址
    'Address': Random.province(), // 生成地址
    'text': Random.string('upper', 5)

  }
  data.push(template)
}
*/
let img_text = [
  '300x250', '250x250', '240x400', '336x280',
  '180x150', '720x300', '468x60', '234x60',
  '88x31', '120x90', '120x60', '120x240',
  '125x125', '728x90', '160x600', '120x600',
  '300x600'
] // 定义随机值

export default Mock.mock({
  'data|4-10': [
    {
      'id': () => Random.id(),
      'Date': () => Random.date(), // 生成一个随机日期,可加参数定义日期格式
      'img': () => Random.image('375x200', '#02adea', img_text[Math.floor(Math.random() * img_text.length)]), // Random.size表示将从size数据中任选一个数据
      'title': () => Random.word(10), //生成2至5个句子的文本
      'des': () => Random.ctitle(4, 10),   // 说明
      'text': () => Random.string('upper', 5)
    }
  ]
});
