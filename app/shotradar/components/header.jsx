var React = require('react');
import { AppBar, Menu, MenuItem, Block, Btn, BtnItem, Icon, Text } from 'react-essence';

import './header.css';

var HeaderBar = React.createClass({
  render() {
    return (
      <AppBar>
        <Menu
          id='menu-appbar-icon-menu'
          classes={'e-text-color-blue-500 cover e-left'}
          icon='navigation-menu'
          >
          <MenuItem>
            <Text>Overview</Text>
          </MenuItem>
          <MenuItem>
            <Text>Another view</Text>
          </MenuItem>
          <MenuItem>
            <Text>Another view</Text>
          </MenuItem>
          <MenuItem>
            <Text>Another view</Text>
          </MenuItem>
        </Menu>

        <h4 className={'sr-header-title'} >Overview</h4>

      </AppBar>
    );
  }
});

module.exports = HeaderBar
