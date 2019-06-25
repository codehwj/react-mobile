import React, { Component } from 'react'
import DataClass from 'jscommon/DataClass';
import { Carousel, WingBlank, WhiteSpace } from 'antd-mobile'
import Recomment from '../../components/recommend/recommend'
import ListBlock from '../../components/list-block/list-block'
import FavoursBlock from '../../components/favours-block/favours-block'
import LatestBlock from '../../components/latest-blcok/latest-block'
import Category from '../../components/category/category'
import { connect } from 'react-redux'
import { setHomeResult } from '@action/home'
import './index.scss'

@connect(
  state => state.home,
  {
    setHomeResult
  }
)
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgHeight: 176,
      isLoading: true,
    };
  }

  async loadStoreList() {
    this.props.loadStoreListView();
    this.setState({
      isLoading: false,
    })
  }
  async getAllHomeData() {
    const response = await DataClass.mockdata('/home/getAllHomeData', {})
    if (response.code === '200') {
      this.setState({
        result: response.result
      })
      this.props.setHomeResult(response.result);
    }
  }

  onEndReached = (event) => {
    if (this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.loadStoreList();
    }, 1000);
  }


  componentDidMount() {
    setTimeout(() => {
      this.getAllHomeData();
    }, 100);
  }

  render() {
    return (
      this.state.result ?
        <WingBlank size="md">
          <WhiteSpace size="md" />
          <Carousel className="space-carousel"
            autoplay={false}
            infinite
          >
            {this.state.result.bannerInfo.map((item, index) => (
              <a
                key={index}
                href={item.url}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, borderRadius: 5, overflow: 'hidden' }}
              >
                <img
                  src={item.imgUrl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>

          <WhiteSpace size="md" />
          <Category categorys={this.state.result.frontCateInfo} ></Category>

          <WhiteSpace size="md" />
          <Recomment mktInfo={this.state.result.mktInfo}></Recomment>
          <WhiteSpace size="md" />
          <div className="block-wrapper">
            <LatestBlock activitySevenInfo={this.state.result.activitySevenInfo}></LatestBlock>
            <ListBlock activityCateInfo={this.state.result.activityCateInfo}></ListBlock>
            <FavoursBlock activityLikeInfo={this.state.result.activityLikeInfo}></FavoursBlock>
          </div>
        </WingBlank> : null
    )
  }
}

export default Home