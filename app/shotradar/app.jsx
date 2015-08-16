'use strict';
var Essence = require("react-essence");
import "../css/essence.css";
import "../css/icons.css";

var React = Essence.React,
    AppBar = Essence.AppBar,
    BottomSheets = Essence.BottomSheets,
    BottomSheetsItem = Essence.BottomSheetsItem,
    Btn = Essence.Btn,
    BtnItem = Essence.BtnItem,
    Block = Essence.Block,
    Card = Essence.Card,
    CardItem = Essence.CardItem,
    CardItemHeader = Essence.CardItemHeader,
    CardItemContent = Essence.CardItemContent,
    CardItemFooter = Essence.CardItemFooter,
    Chip = Essence.Chip,
    ChipItem = Essence.ChipItem,
    DatePicker = Essence.DatePicker,
    DatePickerItem = Essence.DatePickerItem,
    DatePickerHeader = Essence.DatePickerHeader,
    DatePickerHeaderDay = Essence.DatePickerHeaderDay,
    DatePickerHeaderDate = Essence.DatePickerHeaderDate,
    DatePickerContent = Essence.DatePickerContent,
    DatePickerFooter = Essence.DatePickerFooter,
    Dialog = Essence.Dialog,
    DialogItem = Essence.DialogItem,
    DialogItemHeader = Essence.DialogItemHeader,
    DialogItemContent = Essence.DialogItemContent,
    DialogItemFooter = Essence.DialogItemFooter,
    Divider = Essence.Divider,
    Icon = Essence.Icon,
    Image = Essence.Image,
    Input = Essence.Input,
    InputItem = Essence.InputItem,
    List = Essence.List,
    ListItem = Essence.ListItem,
    Menu = Essence.Menu,
    MenuItem = Essence.MenuItem,
    Navigation = Essence.Navigation,
    Paper = Essence.Paper,
    PaperItem = Essence.PaperItem,
    Progress = Essence.Progress,
    Slider = Essence.Slider,
    SliderItem = Essence.SliderItem,
    Snackbar = Essence.Snackbar,
    SnackbarItem = Essence.SnackbarItem,
    Switch = Essence.Switch,
    SwitchItem = Essence.SwitchItem,
    TabItem = Essence.TabItem,
    TabMenu = Essence.TabMenu,
    Text = Essence.Text,
    Toast = Essence.Toast,
    ToastItem = Essence.ToastItem,
    ToolBar = Essence.ToolBar,
    BackgroundColor = Essence.BackgroundColor,
    ClassNames = Essence.ClassNames,
    ClickPosition = Essence.ClickPosition,
    DateFormat = Essence.DateFormat,
    Mobile = Essence.Mobile,
    Position = Essence.Position,
    PositionHorizontal = Essence.PositionHorizontal,
    PubSub = Essence.PubSub;



// React.render(
    
//     ,content
// );

// React.render(
//     <Block type='div' classes='e-background-blue-500 e-text-center'>
//       your content by class .footer here and here and also here?
//     </Block>
//     ,footer
// );

module.exports = React.createClass({
  render: function() {
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

    )
  }
});