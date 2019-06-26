import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import ListView from '../list-view/list-view'
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
          <ListView List={this.props.activityLikeInfo}></ListView>
        </div> :
        null
    )
  }
}