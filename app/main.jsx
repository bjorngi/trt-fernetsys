var React = require('react');

class MainWindow extends React.Component {
  render() {
    return <div>Hei verden!</div>
  }
}

React.render(<MainWindow/>, document.getElementById('wrapper'));
