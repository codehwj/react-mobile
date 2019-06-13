import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStoreListView, loadCarouselData, loadGridData } from '@action/home'
import { Carousel, WingBlank, Grid, WhiteSpace } from 'antd-mobile'
import JListView from '../../components/j-list-view/j-list-view'
import './index.css'

@connect(
  state => state,
  {
    loadStoreListView,
    loadCarouselData,
    loadGridData
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
      if (this.props.home.carouselData == null) {
        this.props.loadCarouselData();
      }
      if (this.props.home.gridData == null) {
        this.props.loadGridData();
      }
      if (this.props.home.dataSource == null) {
        this.loadStoreList();
      } else {
        this.setState({
          isLoading: false
        })
      }
    }, 100);
  }

  render() {
    return (
      <WingBlank size="xs">
        {
          this.props.home.carouselData ?
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite
              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.props.home.carouselData.map((item, index) => (
                <a
                  key={index}
                  href={item.Url}
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={item.image_src}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel> : null
        }
        <WhiteSpace size="sm" />
        {
          this.props.home.gridData ?
            <Grid data={this.props.home.gridData} columnNum="6" carouselMaxRow="2" isCarousel onClick={_el => console.log(_el)} /> : null
        }
        <WhiteSpace size="sm" />
        {
          this.props.home.dataSource != null ?
            <JListView renderHeader="哈哈哈哈" isLoading={this.state.isLoading} onEndReached={this.onEndReached} dataSource={this.props.home.dataSource}></JListView> : null
        }
      </WingBlank>
    )
  }
}

export default Home