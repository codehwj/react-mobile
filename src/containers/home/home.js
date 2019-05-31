import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadStoreListView} from '@action/home'
import { Carousel, WingBlank, Grid, WhiteSpace, ListView } from 'antd-mobile';
import JListView from '../../components/j-list-view/j-list-view'
import './index.css'
import DataClass from 'jscommon/DataClass'

@connect(
  state=>state,
  {loadStoreListView}
)

class Home extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      imgHeight: 176,
      dataSource,
      isLoading: true,
    };
  }

  async loadCarouselData() {
    const result = await DataClass.mockdata('/carousel/getAllCarousel', {});
    this.setState({
      carouselData: result
    })
  }

  async loadGridData() {
    const result = await DataClass.mockdata('/grid/getAllGrid', {})
    this.setState({
      gridData: result
    })
  }
  async loadGoods() {
    return await DataClass.mockdata('/goods/getAllGoods', {});
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.loadStoreListView();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.hoem.homeStoreList.dataSource),
        isLoading: false,
      })
      
    }, 1000);
  }


  componentDidMount() {
    setTimeout(() => {
      this.loadCarouselData();
      this.loadGridData();
      this.props.loadStoreListView().then(result => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.props.home.homeStoreList.dataSource),
          isLoading: false,
        })
      })
      
    }, 100);
  }

  render(h) {
    return (
      <WingBlank size="xs">
        {
          this.state.carouselData ?
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite
              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.carouselData.map((item, index) => (
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
                      // fire window resize event to change height
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
          this.state.gridData ?
            <Grid data={this.state.gridData} columnNum="5" carouselMaxRow="1" isCarousel onClick={_el => console.log(_el)} /> : null
        }
        <WhiteSpace size="sm" />
        <JListView renderHeader="哈哈哈哈" isLoading={this.state.isLoading} onEndReached={this.onEndReached} dataSource={this.state.dataSource}></JListView>
      </WingBlank>
    )
  }
}

export default Home