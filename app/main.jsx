import React from "react"
import { Btn, BtnItem, Icon, Block, Text } from 'react-essence';

class MainWindow extends React.Component {
  render() {
    return (
      <Block type='div' classes={'brick brick-6'}>

        <Text type='h2' classes={"e-display-1 e-text-blue-700"}>Some title</Text>
        <Block type='div' classes={'e-text-grey-400 e-caption'}>
          <Text>Some text</Text>
        </Block>

        <Block type='div' classes={'brick brick-6 e-text-right e-padding-top-15'}>
          <BtnItem
            classes={'raised e-background-pink-A200'}
            onClick={this.yourActionOnClick}
            label='Button 1'/>

          <BtnItem
            classes={'raised e-background-pink-A200'}
            onClick={this.yourActionOnClick}
            label='Button 2'/>
        </Block>
      </Block>

        )
  }
}

React.render(<MainWindow/>, document.getElementById('wrapper'));
