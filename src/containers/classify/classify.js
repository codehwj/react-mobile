import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { WingBlank, WhiteSpace } from 'antd-mobile'
import Category from '../../components/category/category'
import { setClassifyCategory } from '@action/classify'
import { clone } from 'jscommon/common'

@connect(
  state => state,
  {
    setClassifyCategory
  }
)

class Classify extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setClassifyCategory();
      this.setState({
        category: clone(this.props.classify.categorys)
      })
    }, 400);
  }
  render() {
    return (
        <div className="classify">
          <div>
            {
              this.state.category ?
                <Category categorys={this.state.category} ></Category> : null
            }
          </div>
        </div>
    )
  }
}

export default Classify
