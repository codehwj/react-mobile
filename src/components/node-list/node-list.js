import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.scss'

export default class NodeList extends Component {
  static propTypes = {
    nodes: PropsTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
  }
  getWrapperWidth(allNode) {
    return allNode * 120 + allNode * 12;
  }

  render() {
    return (
      this.props.nodes.length > 0 ?

        <div className="node-list" >
          <div className="wrapper" style={{ width: this.getWrapperWidth(this.props.nodes.length) }}>
            {
              this.props.nodes.map((node, index) => (
                <div className="node node--activity vertical" key={index}>
                  <div className="thumbnail" style={{ backgroundImage: `url(${node.actImgUrl})` }}>
                    <div className={node.maxDiscount !== '' && node.maxDiscount != null ? "thumbnail__tag ": "thumbnail__tag hide"}>
                      <span>{node.maxDiscount}</span>折起
                    </div>
                    <div className="thumbnail__hot">
                      <span>{node.hotLevel}</span>℃
                    </div>
                  </div>
                  <div className="main">
                    <h1 className="title">{node.actName}</h1>
                    <div className="price">
                      <div>
                        <span>￥{node.lowPrice || 0}</span>
                        <span className="sub">&nbsp;&nbsp;起</span>
                      </div>
                    </div>
                    <div className="date">{node.actTime}</div>
                    <div className="venue"></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        : null

    )
  }
}