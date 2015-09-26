var React = require('react');
import { List, Divider, Text } from 'react-essence';
var FernetListItem = require("./fernetlistitem.jsx");

var ShotList = React.createClass({
  propTypes: {
    //var: React.PropTypes.[array, bool, func, number, object, string]
    header: React.PropTypes.string,	
  },
  render() {
    return (
      <div>
        <Text type='h4' classes={"e-display-1"}>
          {this.props.header}
        </Text>
        <List type={'two-line'} >

          <Divider classes={'thinnest e-background-grey-100'} />

          <FernetListItem
            name = 'Dag Jomar'
            image = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/13e/31c/2e59425.jpg'
            timestamp = '1443276231'
            text = 'DID SOME SHIT, yo'
          />

        <Divider classes={'thinnest e-background-grey-100'} />

        <FernetListItem
          name = 'Dag Jomar'
          image = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/13e/31c/2e59425.jpg'
          timestamp = '1443276231'
          text = 'DID SOME SHIT, yo'
        />

      <Divider classes={'thinnest e-background-grey-100'} />

      <FernetListItem
        name = 'Dag Jomar'
        image = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/13e/31c/2e59425.jpg'
        timestamp = '1443276231'
        text = 'DID SOME SHIT, yo'
      />

    <Divider classes={'thinnest e-background-grey-100'} />

  </List>
</div>
    );
  }

});
module.exports = ShotList
