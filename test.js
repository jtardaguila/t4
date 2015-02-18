'use strict';

var http = require('http');
var assert = require('assert');
var service = require('./index.js');

service.listen(5000, function() {
    http.get('http://localhost:5000/', function (res) {
        assert(200 === res.statusCode, 'should reply 200 ok');
        process.exit(0);
    });
});
