var React = require('react');
import { AppBar, Menu, MenuItem, Block, Btn, BtnItem, Icon, Text } from 'react-essence';

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
            <Text>New project</Text>
          </MenuItem>
          <MenuItem>
            <Text>New user</Text>
          </MenuItem>
          <MenuItem>
            <Text>More tools</Text>
          </MenuItem>
          <MenuItem>
            <Text>Exit</Text>
          </MenuItem>
        </Menu>

        <Menu
          id='menu-appbar-left'
          classes={'e-text-color-blue-500 cover e-left'}
          placeholder='Options'
          >
          <MenuItem>
            <Icon name='notification-sms' />
            <Text>Notifications</Text>
          </MenuItem>
          <MenuItem>
            <Icon name='notification-tap-and-play' />
            <Text>Tap & Pay</Text>
          </MenuItem>
          <Block type='li' classes={'divider'} />
          <MenuItem>
            <Text type='a' href='http://www.pearlhq.com'>
              Pearl
            </Text>
          </MenuItem>
          <MenuItem>
            <Text type='a' href='http://www.google.com'>
              Google
            </Text>
          </MenuItem>
        </Menu>

        <Menu
          id='menu-appbar-right'
          classes={'e-text-color-blue-500 cover e-right'}
          icon='navigation-more-vert'
          right={true}
          >
          <MenuItem>
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Text>Settings</Text>
          </MenuItem>
          <Block type='li' classes={'divider'} />
          <MenuItem>
            <Text>Support</Text>
          </MenuItem>
          <MenuItem>
            <Text>Logout</Text>
          </MenuItem>
        </Menu>

        <Btn>
          <BtnItem
            icon='action-favorite'
            classes={'simple-button e-right'}
          />
          <BtnItem
            icon='action-search'
            classes={'simple-button e-right'}
          />
        </Btn>
      </AppBar>
    );
  }
});

module.exports = HeaderBar
