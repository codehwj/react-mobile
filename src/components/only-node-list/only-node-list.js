import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.scss'

export default class OnlyNodeList extends Component {
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
      this.props.nodes.length &&
      <div className="node-list" >
        <div className="wrapper" style={{ width: this.getWrapperWidth(this.props.nodes.length) }}>
          {
            this.props.nodes.map((node, index) => (
              <div className="node node--activity vertical" key={index}>
                <div className="thumbnail" style={{ backgroundImage: `url(${node.filmImg})` }}>
                  <div className="thumbnail__hot">
                    <span>{node.scoreD}</span>
                  </div>
                </div>
                <div className="main">
                  <h1 className="title">{node.filmName}</h1>
                </div>
              </div>
            ))
          }


        </div>
      </div>

    )
  }
}