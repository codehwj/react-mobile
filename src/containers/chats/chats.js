import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import DataClass from 'jscommon/DataClass'

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async initData() {
    return await DataClass.mockdata('/chats/getAllCartlist', {});
  }

  componentDidMount() {
    this.initData().then(result => {
      console.log(result);
      this.setState({
        data: result.list
      })
    })
  }


  render(h) {
    return (
      <div>
        <WingBlank size="md">
          {
            this.state.data && this.state.data.length > 0 ?
              this.state.data.map((item, index) => (
                <div key={index}>
                  <WhiteSpace size="md" />
                  <Card onClick={() => console.log(item)}>
                    <Card.Header
                      title={item.title}
                      thumb={item.img}
                      extra={<span>{item.headerExtra}</span>}
                    />
                    <Card.Body>
                      <div>{item.body}</div>
                    </Card.Body>
                    <Card.Footer content={item.footerContent} extra={<div>{item.footerExtra}</div>} />
                  </Card>
                  </div>
              )) : null
          }
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Chats