import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
@withRouter

class NavLinkBar extends Component {
  static propTypes = {
    data: PropsTypes.array.isRequired
  };
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const navList = this.props.data.filter(v => !v.hide);
    let { pathname } = this.props.location;

    return (
      <div>
        <TabBar>
          {
            navList.map(v => (
              <TabBar.Item
                badge=""
                key={v.path}
                title={v.title}
                icon={{ uri: require(`./img/${v.icon}.png`) }}
                selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
                selected={pathname === v.path}
                onPress={() => {
                  this.props.history.push(v.path)
                }}
              >

              </TabBar.Item>

            ))
          }
        </TabBar>
      </div>
    )
  }
}
export default NavLinkBar