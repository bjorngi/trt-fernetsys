'use strict';
var ShotRadarApp = require("./app.jsx");

var body = document.body, // default React render path is html body
    root = document.getElementById("root");


var Essence = require("react-essence");
var React = Essence.React;


React.render(
    <ShotRadarApp type='div' classes='e-background-yellow-500 e-text-center'>
    </ShotRadarApp>
    ,root
);