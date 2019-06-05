
import React, { Component } from 'react'
import { ListView } from 'antd-mobile'
import ListRow from '../list-row/list-row'

class ListViews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlerRowClick(rowData, sectionID, rowID) {
    console.log(rowData, sectionID, rowID);
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
      return <ListRow rowData={rowData} sectionID={sectionID} rowID={rowID} rowClick={() => {this.handlerRowClick(rowData, sectionID, rowID)}} ></ListRow>
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
