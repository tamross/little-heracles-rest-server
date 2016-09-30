var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Results = require('../models/results');
var Result = Results.Result;
var Verify = require('./verify');

var resultRouter = express.Router();
resultRouter.use(bodyParser.json());

resultRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Result.find({}).exec(function (err, record) {
        if (err) return next(err);
        res.json(event);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {
    Result.create(req.body, function (err, result) {
        if (err) throw err;
        console.log('Result created!');
        var id = result._id;
        res.json({"id":id});
    });
});

module.exports = resultRouter;