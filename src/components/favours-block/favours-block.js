import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.scss'

export default class FavoursBlock extends Component {
  static propTypes = {
    activityLikeInfo: PropsTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      block__title: '投你喜欢'
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      this.props.activityLikeInfo.length > 0 ?
        <div className="block favours">
          <h3 className="block__title">{this.state.block__title}</h3>
          {
            this.props.activityLikeInfo.map((item, index) => (
              <div className="node node--activity horizontal" key={index}>
                <div className="thumbnail" style={{ backgroundImage: `url(${item.actImgUrl})` }}>
                  <div className={item.maxDiscount !== '' && item.maxDiscount != null ? "thumbnail__tag ": "thumbnail__tag hide"}>
                    <span>{item.maxDiscount}</span>折起
                  </div>
                </div>
                <div className="main">
                  <h1 className="title">{item.actName}</h1>
                  <div className="date">{item.actTime}</div>
                  <div className="venue hide">{item.veName}</div>
                  <div className="tags"></div>
                  <div className="price">
                    <div>
                      <span>￥{item.lowPrice}</span>
                      <span className="sub">  起</span>
                    </div>
                    <div className="status">{item.statusTag}</div>
                  </div>
                  <div className="quote">
                    {item.intro}
                  </div>
                </div>
              </div>
            ))
          }

        </div> :
        null
    )
  }
}