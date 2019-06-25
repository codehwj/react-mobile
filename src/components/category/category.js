import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import './index.scss'

export default class Category extends Component {
  static propTypes = {
    categorys: PropsTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  componentDidMount() {

  }
  getWrapperWidth(allNode) {
    return allNode * 62 + allNode * 12;
  }

  clickCategory(item, index) {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div className="categories">
        {
          this.props.categorys ?
            <div className="wrapper" style={{ width: this.getWrapperWidth(this.props.categorys.length) }}>
              {
                this.props.categorys.map((item, index) => (
                  <div className={this.state.activeIndex === index? "item active" : "item"} onClick={() => {this.clickCategory(item, index)}} key={index}>
                    <span className="cate-icon yanchanghui"></span>
                    {item.title}
                  </div>
                ))
              }
            </div> : null
        }
      </div>
    )
  }
}