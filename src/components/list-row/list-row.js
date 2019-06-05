import React, { Component } from 'react'

class ListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div key={this.props.rowID} style={{ padding: '0 15px' }} onClick={() => {this.props.rowClick()}}>
        <div
          style={{
            lineHeight: '50px',
            color: '#888',
            fontSize: 18,
            borderBottom: '1px solid #F6F6F6',
          }}
        >{this.props.rowData.title}</div>
        <div style={{ display: 'flex', padding: '15px 0' }}>
          <img style={{ height: '64px', marginRight: '15px' }} src={this.props.rowData.img} alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{this.props.rowData.des}</div>
            <div style={{ textAlign: 'left' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{this.props.rowID}</span>¥</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListRow