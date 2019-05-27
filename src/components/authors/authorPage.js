"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var Router = require('react-router');
var Link = Router.Link;
var AuthorList = require('./authorList');


var Authors = React.createClass({

   getInitialState: function(){
      return { 
         authors: [] 
      };
   },

   componentDidMount: function() {
      if(this.isMounted()){
         this.setState({authors: AuthorApi.getAllAuthors()});
      }
   },   

   render: function(){
      return (
         <div>
            <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            <AuthorList authors = {this.state.authors} />
         </div>
      );
   }
});

module.exports = Authors;
