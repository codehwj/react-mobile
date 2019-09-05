import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import './ticket.scss'
class Ticket extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main">
        <MyCard></MyCard>
      </div>
    )
  }
}

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: `http://image.xishiqu.cn/upload/activity/119/080/20190807008/v/b/70C55701-C923-8AD3-213A-07AFBD0621AD.jpg`
    };
  }

  render() {
    return (
      <div className="card">
        <h3 className="title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题</h3>
        <h4 className="subTitle">我是子标题我是子标题我是子标题我是子标题我是子标题我是子标题我是子标题</h4>
        <div className="thumbnail" style={{ backgroundImage: `url(${this.state.imgUrl})` }}></div>
        <div className="footer">
          <span className="avatar"><Icon type="check-circle" /></span>
          <div className="issueInfo">
            <span className="author">作者作者</span>
            <span className="time">2019.09.04</span>
          </div>
          <div className="right">
            <div className="flow"><Icon type="check-circle" />239</div>
            <div className="comment"><Icon type="check-circle" />评论</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket;