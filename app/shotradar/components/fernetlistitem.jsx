var React = require('react');
var moment = require('moment');


var Essence = require("react-essence");
var Block     = Essence.Block,
    ListItem  = Essence.ListItem,
    Divider   = Essence.Divider,
    Icon      = Essence.Icon,
    Text      = Essence.Text,
    Image     = Essence.Image;

var FernetListItem = React.createClass({
  propTypes: {
    //var: React.PropTypes.[array, bool, func, number, object, string]
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },
  render() {
    var rawTimestamp = moment("10/10/15 09:00").fromNow(true).split(' ');
    var timestamp = `${rawTimestamp[0]}${rawTimestamp[1].slice(0,1)}`

    return (

        <ListItem>

          <Block type='li'>
            <Text type='a' classes={'brick-11'} href='#attractions'>
              <Block type='span' classes={'e-list-content'}>
                <Image
                  src={this.props.image}
                  alt={this.props.name}
                  classes={'e-list-avatar'}
                />
                <Block type='span'>
                  <Text type='strong'>{this.props.name}</Text>
                  <br />
                  <Text>{this.props.text}</Text>
                </Block>
              </Block>
            </Text>
            <Text classes={'brick-1'}>
              <Block type='span' classes={'e-list-content'}>
                  <Block type='span' classes={'e-right e-caption'}>
                    <Text>{timestamp}</Text>
                  </Block>
              </Block>
            </Text>
          </Block>
        </ListItem>

    );
  }

});
module.exports = FernetListItem
