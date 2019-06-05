import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import JCarousel from '../../components/j-carousel/j-carousel'
import DetailFooter from '../../components/detail-footer/detail-footer'
import './index.scss'

export default class GoodsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarTitleActive: 0
    };
  }

  handleNavbarTitleClick(item, index) {
    this.setState({
      navbarTitleActive: index
    })
  }

  render() {
    const navbarTitle = [
      {
        name: "宝贝",
        type: "",
        select: true,
      }, {
        name: "评价",
        type: "",
        select: false,
      }, {
        name: "详情",
        type: "",
        select: false,
      }, {
        name: "推荐",
        type: "",
        select: false,
      }
    ]
    const goodsId = this.props.match.params.goodsId;
    console.log(goodsId);
    return (
      <div className="goodsDetail">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          <div>
            {
              navbarTitle.map((item, index) => (
                <button
                  key={index}
                  className={this.state.navbarTitleActive === index ? 'active' : ''}
                  onClick={() => { this.handleNavbarTitleClick(item, index) }}
                >
                  {item.name}</button>
              ))
            }
          </div>
        </NavBar>
        <div className="container">
          <JCarousel></JCarousel>
        </div>

        <DetailFooter></DetailFooter>
      </div>
    )
  }
}