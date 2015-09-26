'use strict';
var React = require('react');
import {Block} from 'react-essence';
var FernetListItem = require("../shotradar/components/fernetlistitem.jsx");
var HeaderBar = require("../shotradar/components/header.jsx");
var ShotList = require("../shotradar/components/shotlist.jsx");

import "../css/essence.css";
import "../css/icons.css";

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <HeaderBar />
        <Block classes={"brick brick-12 e-padding-top-75"}>
          <ShotList header = 'Pendig Shots' />
          <ShotList header = 'Completed Shots' />
        </Block>
      </div>
    )
  }
});
