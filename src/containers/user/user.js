import React, { Component } from 'react'
import { List } from 'antd-mobile'
import DataClass from 'jscommon/DataClass';

const Item = List.Item;
const Brief = Item.Brief;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async initData() {
    return await DataClass.mockdata('/user/getUserList', {});
  }

  componentDidMount() {
    this.initData().then(result => {
      this.setState({
        data: result.list
      })
      
    })
  }

  render(h) {
    return (
      <div className="main">
        <List renderHeader={() => ''} className="my-list">
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => { }}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        {
          this.state.data && this.state.data.length > 0 ?
          this.state.data.map((list, index) => (
            <List renderHeader={() => list.renderHeader} key={index}>
              {
                list.item && list.item.length > 0 ? 
                list.item.map((item, key) => (
                  <Item
                    key={key}
                    thumb={item.img}
                    arrow="horizontal"
                    onClick={() => { }}
                  >{item.title}</Item>
                )) : null
              }
            </List>
          )): null
        }
        </div>
    )
  }
}

export default User