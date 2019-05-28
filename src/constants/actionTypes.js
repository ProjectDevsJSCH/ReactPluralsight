"use strict";

var keyMirror = require('react/lib/keyMirror');

// keyMirror puts in the null the same property that is in left 

module.exports = keyMirror({
	CREATE_AUTHOR: null,
	INITIALIZE: null,
	UPDATE_AUTHOR: null,
	DELETE_AUTHOR: null
});