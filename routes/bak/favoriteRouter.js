var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorites');
var Verify = require('./verify');

var favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

favoriteRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
	var userId = req.decoded._doc._id;
    Favorites.findOne({"postedBy":userId})
        .populate('postedBy')
        .populate('dishes')
        .exec(function (err, favorite) {
        if (err) throw err;
        res.json(favorite);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {
	var userId = req.decoded._doc._id;
	console.log("userId " + userId);
	Favorites.findOne({"postedBy":userId}).exec(function (err, favorite) {
		if (err) throw err;
        // If the user already has some favourites, add the dish to the existing list.
		if (favorite) {
			var dishes = favorite.dishes;
			var dishAlreadyFavorited = dishes.indexOf(req.body._id);
			// If the dish is already in the favorites, no need to add it
			if (dishAlreadyFavorited < 0) {
				console.log("Adding dish to favorites");
				favorite.dishes.push(req.body);
				favorite.save(function (err, favorite) {
		            if (err) throw err;
		            console.log('Updated Favorites!');
		            res.json(favorite);
		        });
			} else {
				console.log("Dish is already in favorites");
				res.json(favorite);
			}
		} else {
			console.log("Creating new favorite");
			// The user has no favourites yet, create it.
			Favorites.create({
		    	"postedBy":userId,
		    	"dishes":req.body
		    }, function (err, favorite) {
		        if (err) throw err;
		        console.log('Favorite created!');
		        res.json(favorite);
		    });
		}
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
	var userId = req.decoded._doc._id;
    Favorites.remove({"postedBy":userId}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

favoriteRouter.route('/:dishId')
.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
	var userId = req.decoded._doc._id;
    Favorites.findOne({"postedBy":userId}).exec(function (err, favorite) {
        if (err) throw err;
        if(favorite) {
        	var dishes = favorite.dishes;
	        console.log("Favorite dishes: " + dishes);
	        console.log("Dish to delete " + req.params.dishId);
			var dishIndex = dishes.indexOf(req.params.dishId);
			console.log("dishIndex " + dishIndex);
			if(dishIndex >= 0) {
				favorite.dishes.splice(dishIndex, 1);
				console.log("Favorite dishes: " + dishes);
				favorite.save(function (err, favorite) {
		            if (err) throw err;
		            console.log('Updated Favorites!');
		            res.json(favorite);
		        });
			} else {
				var err = new Error('Dish was not in favorites.');
	            err.status = 400;
	            return next(err);
			}
        } else {
        	var err = new Error('You do not have any favorites.');
            err.status = 400;
            return next(err);
        }
    });
});


module.exports = favoriteRouter;