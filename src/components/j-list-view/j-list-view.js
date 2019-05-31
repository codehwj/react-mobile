
import React, { Component } from 'react'
import { ListView } from 'antd-mobile'

class ListViews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8
        }}
      ></div>
    );
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{rowData.title}</div>
          <div style={{ display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={rowData.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.des}</div>
              <div style={{ textAlign: 'left' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.props.dataSource}
        renderHeader={() => <span>{this.props.renderHeader}</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.props.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default ListViews
