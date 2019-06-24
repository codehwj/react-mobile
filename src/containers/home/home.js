import React, { Component } from 'react'
import DataClass from 'jscommon/DataClass';
import { Carousel, WingBlank, Grid, WhiteSpace } from 'antd-mobile'
import Recomment from '../../components/recommend/recommend'
// import JListView from '../../components/j-list-view/j-list-view'
import ListBlock from '../../components/list-block/list-block'
import './index.scss'

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
          <Grid data={this.state.result.frontCateInfo} columnNum="6" carouselMaxRow="1" isCarousel onClick={_el => console.log(_el)} />
          <WhiteSpace size="md" />
          <Recomment mktInfo={this.state.result.mktInfo}></Recomment>
          <WhiteSpace size="md" />
          <div className="block-wrapper">
            <ListBlock activityCateInfo={this.state.result.activityCateInfo}></ListBlock>
          </div>
          {/* /* <WhiteSpace size="sm" /> */}
          {/* <JListView renderHeader="哈哈哈哈" isLoading={this.state.isLoading} onEndReached={this.onEndReached} dataSource={this.props.home.dataSource}></JListView> : null */}
        </WingBlank> : null
    )
  }
}

export default Home