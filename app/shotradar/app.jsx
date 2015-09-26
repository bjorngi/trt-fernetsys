'use strict';
var React = require('react');
var Essence = require("react-essence");
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
        <ShotList 
          header = 'Pendig Shots'
        />
      </div>
    )
  }
});
