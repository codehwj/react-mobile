import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import NodeList from '../node-list/node-list'
import MainNode from '../main-node/main-node'
import OnlyNodeList from '../only-node-list/only-node-list'
import './index.scss'

class ListBlock extends Component {
  static propTypes = {
    activityCateInfo: PropsTypes.array.isRequired
  };
  constructor(props) {
    super(props)
    this.state = {}
  }
  /**
   * @author hwj
   * @dete 2019-6-24
   * @description 重新截取新的数组
   */
  sliceArrar(arr, start, end) {
    return arr.slice(start, end);
  }
  render() {
    return (
      this.props.activityCateInfo && this.props.activityCateInfo.length > 0 ?
        this.props.activityCateInfo.map((item, index) => (

          item.mData[0].actCode ?
            <div className="block" key={index}>
              <h3 className="block_title">{item.mTitle}<small>查看更多</small></h3>
              <MainNode nodes={this.sliceArrar(item.mData, 0, 1)}></MainNode>
              <NodeList nodes={this.sliceArrar(item.mData, 1, item.mData.length)}></NodeList>
              <div className="border-bottom"></div>
            </div> : 
            
            <div className="block" key={index}>
              <h3 className="block_title">{item.mTitle}<small>查看更多</small></h3>
                <OnlyNodeList nodes={item.mData}></OnlyNodeList>
              <div className="border-bottom"></div>
            </div>


        ))
        : null
    )
  }
}

export default ListBlock
