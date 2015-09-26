var React = require('react');
var moment = require('moment');

var ListItem = React.createClass({
  propTypes: {
    //var: React.PropTypes.[array, bool, func, number, object, string]
    name: React.PropTypes.string.isRequired,	
    image: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },
  render() {
    var timestamp = moment("10/10/15 09:00").fromNow(true);
    
    return (
      <div className = 'listitem'>
        <div className = 'portait'>
          <img src={this.props.image}></img>
        </div>
        <div className = 'name'>
          {this.props.name}
        </div>
        <div className = ''>
          {this.props.text}
        </div>
        <div className = 'timestamp'>
          {timestamp}
        </div>
      </div>
    
    );
  }

});
module.exports = ListItem
