import React, { Component } from 'react'
import { Carousel, WingBlank, Grid, WhiteSpace } from 'antd-mobile';
import ListView from '../../components/list-view/list-view'
import './index.css';
import DataClass from 'jscommon/DataClass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      imgHeight: 176
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


  componentDidMount() {
    setTimeout(() => {
      this.loadCarouselData();
      this.loadGridData();
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
        <ListView></ListView>
      </WingBlank>
    )
  }
}

export default Home