import React, { Component } from 'react'
import './index.scss'

class ListBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="block">
        <h3 className="block_title">七日演出<small>演出日历</small></h3>
        <div className="main-node">
          <div className="node node--activity primary">
            <div className="bg" style={{backgroundImage: `url(http://image4.xishiqu.cn/upload/activity/119/040/20190402016/v/b/D5CC8C2B-8DDF-8B9E-4F53-2F32B25EA135.jpg)`}}></div>
            <div className="mask"></div>
            <div className="thumbnail">
              <div className="thumbnail__hot" style={{backgroundImage: `url(http://image4.xishiqu.cn/upload/activity/119/040/20190402016/v/b/D5CC8C2B-8DDF-8B9E-4F53-2F32B25EA135.jpg)`}}>
                <span></span>℃
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBlock