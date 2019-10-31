import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PullToRefresh, Toast, WingBlank } from 'antd-mobile'
import Category from '../../components/category/category'
import ListView from '../../components/list-view/list-view'
import { setClassifyCategory } from '@action/classify'
import { clone } from 'jscommon/common'
import { fetchGET } from 'jscommon/DataClass'

@connect(
  state => state,
  {
    setClassifyCategory
  }
)

class Classify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      hasMore: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.setClassifyCategory();
      this.setState({
        category: clone(this.props.classify.categorys)
      })
    }, 400);
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  async clickCategoryItem(cate, index) {
    this.setState({
      frontCate: cate.pinyinName,
      date: '',
      order: -1,
      page: 1
    }, async () => {
      let { frontCate, date, order, page } = this.state;
      const response = await fetchGET(`/ajax/activity/list?`, { frontCate, date, order, page });
      if (response.code === '200') {
        this.setState({
          categoryList: response.result.list,
          hasMore: response.result.hasMore
        })
      }
    })
  }

  /**
   * @author hwj
   * @dete 2019-06-26
   * @description 上拉刷新数据
   */
  async refreshClassify() {
    if (!this.state.hasMore) {
      Toast.info('暂无更多数据', 1);
      return
    }
    let currentPage = this.state.page;
    currentPage++;
    this.setState({
      page: currentPage
    }, async () => {
      let { frontCate, date, order, page } = this.state;
      this.setState({ refreshing: true });
      const response = await fetchGET(`/ajax/activity/list?`, { frontCate, date, order, page });
      this.setState({ refreshing: false });
      let newCategoryList = this.state.categoryList.concat(response.result.list)
      if (response.code === '200') {
        this.setState({
          categoryList: newCategoryList,
          hasMore: response.result.hasMore
        })
      }
    })

  }
  render() {
    return (
      <PullToRefresh
        damping={60}
        className="main"
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => { this.refreshClassify() }}
      >
        <div className="classify" style={{ backgroundColor: "#fff" }}>
          <div>
            {
              this.state.category &&
              <Category categorys={this.state.category} onClickCategoryItem={(cate, index) => { this.clickCategoryItem(cate, index) }}></Category>
            }
            {
              this.state.categoryList &&
              <WingBlank size="md">
                <ListView List={this.state.categoryList}></ListView>
              </WingBlank>
            }
          </div>
        </div>
      </PullToRefresh>
    )
  }
}

export default Classify
