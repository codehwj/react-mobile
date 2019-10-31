import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.scss'

export default class MainNode extends Component {
  static propTypes = {
    nodes: PropsTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    // const node = this.props.node;
    // console.log(node)
    return (
      this.props.nodes.length &&
      this.props.nodes.map((node, index) => (
        <div className="main-node" key={index}>
          <div className="node node--activity primary">
            <div className="bg" style={{ backgroundImage: `url(${node.actImgUrl})` }}></div>
            <div className="mask"></div>
            <div className="thumbnail" style={{ backgroundImage: `url(${node.actImgUrl})` }}>
              <div className={node.maxDiscount !== '' && node.maxDiscount != null ? "thumbnail__tag " : "thumbnail__tag hide"}>
                <span>{node.maxDiscount}</span>折起
                </div>
              <div className="thumbnail__hot" >
                <span>{node.hotLevel}</span>℃
            </div>
            </div>
            <div className="main">
              <h1 className="title">{node.actName}</h1>
              <div className="quote">{node.intro}</div>
              <div className="date">{node.actTime}</div>
              <div className="price">
                <div >
                  <span>￥{node.lowPrice}</span>
                  <span className="sub">起</span>
                </div>
                <div>在售卖家{node.sellerCoun}家</div>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }
}