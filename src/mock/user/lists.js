import Mock from 'mockjs';

const Random = Mock.Random;

const imgs = [
  'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
  'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png'
]
const titles = [
  '支付', '收藏', '相册', '卡包', '表情', '设置'
]

// img_text[Math.floor(Math.random()*img_text.length)
export default Mock.mock({
  'list|3': [
    {
      'item|1-3': [
        {
          'id': () => Random.id(),
          'Date': () => Random.date(), // 生成一个随机日期,可加参数定义日期格式
          'img': () => imgs[Math.floor(Math.random()*imgs.length)], // Random.size表示将从size数据中任选一个数据
          'title': () => titles[Math.floor(Math.random()*titles.length)], 
          'subtitle': ''
        }
      ],
      'renderHeader': 'test'
    }
  ]
})
