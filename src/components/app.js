/* eslint-disable strict */
$ = jQuery = require('jquery'); // Declare jquery global in the scripts

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
   render: function () {
      return (
         <div>
            <Header />
            <div className="container-fluid">
               <RouteHandler />
            </div>
         </div>
      );
   }
});

module.exports = App;