
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ListView } from 'antd-mobile'
import { throttle } from 'jscommon/common'
import ListRow from '../list-row/list-row'
@withRouter

class ListViews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlerRowClick(rowData, sectionID, rowID) {
    this.props.history.push(`/goodsDetail/${rowData.id}`)
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
      return (<ListRow rowData={rowData} sectionID={sectionID} rowID={rowID} rowClick={() => { this.handlerRowClick(rowData, sectionID, rowID) }} ></ListRow>)

    };
    return (
      <div>
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
          onScroll={throttle(
            () => {
              console.log('scroll')
              },
             3000)}
          scrollRenderAheadDistance={500}
          onEndReached={this.props.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>

    );
  }
}

export default ListViews
