import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { Tabs } from 'antd-mobile'
import NodeList from '../node-list/node-list'
import './index.scss'

export default class LatestBlock extends Component {
  static propTypes = {
    activitySevenInfo: PropsTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  filterTabsTitle() {
    let tab = this.props.activitySevenInfo.map((item, index) => {
      return { title: (<span className="tab-item">{item.title}</span>) }
    })
    this.setState({
      tabs: tab
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.filterTabsTitle();
    }, 300);
  }

  render() {
    return (
      <div className="block block--latest">
        <h3 className="block_title">七日演出<small>演出日历</small></h3>
        <Tabs tabs={this.state.tabs}
          initialPage={1}
          animated={false}
          useOnPan={false}
          swipeable={false}
        >
          {
            this.props.activitySevenInfo && this.props.activitySevenInfo.map((item, index) => (

              item.list.length && <NodeList nodes={item.list} key={index}>1212</NodeList>
            ))
          }
        </Tabs>
        <div className="border-bottom"></div>
      </div>
    )
  }
}