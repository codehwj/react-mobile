import React, { Component } from 'react'
import { List } from 'antd-mobile'
import moment from 'moment'
import DataClass from 'jscommon/DataClass';

const Item = List.Item;
const Brief = Item.Brief;

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeader: moment().format(`YYYY年MM月DD日HH时mm分ss秒`)
    };
  }

  async initNotificationData() {
    return await DataClass.mockdata('/info/getAllNotification', {});
  }

  componentDidMount() {
    this.initNotificationData().then(result => {
      console.log(result);
      this.setState({
        data: result
      })
    })
  }

  render(h) {
    return (
      <div className="main">
        <List renderHeader={() => this.state.listHeader} className="my-list">
          {
            this.state.data && this.state.data.length &&
            this.state.data.map(item => (
              <Item
                key={item.id}
                arrow="horizontal"
                thumb={item.img}
                multipleLine
                onClick={() => { console.log(item) }}
              >
                <h5 style={{ marginTop: 5, marginBottom: 5 }}>{item.title}</h5>
                <Brief>{item.subtitle}</Brief>
              </Item>
            ))
          }
        </List>
      </div>
    )
  }
}

export default Info