import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

export default class DetailFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handlerButtonClick(item) {
    console.log(item);
  }

  render() {
    const buttons = [
      {
        name: '商铺',
        type: 'search',
        icon: 'search'
      },{
        name: '客服',
        type: 'ellipsis',
        icon: 'ellipsis'
      },{
        name: '收藏',
        type: 'check-circle',
        icon: 'check-circle'
      }
    ]
    return (
      <div className="footer">
        <div className="Grid-cell cell">
          {
            buttons.map((item, index) => (
              <button key={index}><Icon type={item.type} size='xs' onClick={() => {this.handlerButtonClick(item)}}/>{item.name}</button>
            ))
          }
        </div>
        <div className="from-cell cell">
          <button className="addCart">加入购物车</button>
          <button className="buy">立即购买</button>
        </div>
      </div>
    )
  }
}