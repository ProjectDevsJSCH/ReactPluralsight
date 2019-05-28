"use strict";

var React = require('react');
// var AuthorApi = require('../../api/authorApi');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var Router = require('react-router');
var Link = Router.Link;
var AuthorList = require('./authorList');


var Authors = React.createClass({

   getInitialState: function () {
      return {
         authors: AuthorStore.getAllAuthors()
      };
   },

   componentWillMount: function () {
      AuthorStore.addChangeListener(this._onChange);
   },

   componentWillUnmount: function () {
      AuthorStore.removeChangeListener(this._onChange);
   },

   _onChange: function () {
      this.setState({ authors: AuthorStore.getAllAuthors() });
   },

   render: function () {
      return (
         <div>
            <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            <AuthorList authors={this.state.authors} />
         </div>
      );
   }
});

module.exports = Authors;
