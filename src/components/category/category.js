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
    if (props.hasOwnProperty("onClickCategoryItem")) {
      props.onClickCategoryItem(props.categorys[0], 0);
    }
  }

  componentDidMount() {
  }
  /**
   * @author hwj
   * @date 2019-6-25
   * @description 根据节点的数量获取滚动wrapper的宽度
   *  */
  getWrapperWidth(allNode) {
    return allNode * 62 + allNode * 12;
  }

  /**
   * @description 分类item的点击事件
   *  */
  clickCategory(item, index) {
    if (this.state.activeIndex === index) return;
    this.setState({
      activeIndex: index
    })
    // 调用父级事件, 传参到父级组件
    if (this.props.hasOwnProperty("onClickCategoryItem")) {
      this.props.onClickCategoryItem(item, index);
    }
  }

  render() {
    return (
      <div className="categories">
        {
          this.props.categorys &&
          <div className="wrapper" style={{ width: this.getWrapperWidth(this.props.categorys.length) }}>
            {
              this.props.categorys.map((item, index) => (
                <div className={this.state.activeIndex === index ? "item active" : "item"} onClick={() => { this.clickCategory(item, index) }} key={index}>
                  <span className="cate-icon yanchanghui"></span>
                  {item.title}
                </div>
              ))
            }
          </div>
        }
      </div>
    )
  }
}