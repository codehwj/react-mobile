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

  async getAllHomeData() {
    // let url = `/ajax/home/index?`;
    const response = await DataClass.mockdata('/home/getAllHomeData', {})
    // const response = await fetchGET(url, { cityCode: "021" });
    if (response.code === '200') {
      this.setState({
        result: response.result
      })
      this.props.setHomeResult(response.result);
    }
  }


  componentDidMount() {
    this.timer = setTimeout(() => {
      this.getAllHomeData();
    }, 100);
  }

  componentWillUnmount() {
    this.timer = null;
    clearTimeout(this.timer);
  }


  render() {
    console.log(this.state.result);

    return (
      this.state.result ?
        <div className="main">
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

          </WingBlank>
          <div className="block-wrapper">
            <LatestBlock activitySevenInfo={this.state.result.activitySevenInfo}></LatestBlock>
            <ListBlock activityCateInfo={this.state.result.activityCateInfo}></ListBlock>
            <FavoursBlock activityLikeInfo={this.state.result.activityLikeInfo}></FavoursBlock>
          </div>
        </div> : null
    )
  }
}

export default Home