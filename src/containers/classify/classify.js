import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { getChatsList } from '@action/chats'

@connect(
  state=>state,
  {
    getChatsList
  }
)
class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getChatsList();
    }, 400);
  }
  render() {
    return (
      <div>
        <WingBlank size="md">
          {
            this.props.chats.chatsList && this.props.chats.chatsList.length > 0 ?
              this.props.chats.chatsList.map((item, index) => (
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