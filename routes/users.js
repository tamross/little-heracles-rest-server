var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');
var Verify = require('./verify');

/* GET all users */
router.get('/', Verify.verifyOrdinaryUser, Verify.verifyClubOfficial, function(req, res, next) {
      console.log("Get users");
	  	User.find({}, function (err, user) {
	        if (err) throw err;
	        res.json(user);
	    });
});

/* Get all athletes */
router.get('/athletes', Verify.verifyOrdinaryUser, Verify.verifyClubOffical, function(req, res, next) {
      console.log("Get all athletes";
      User.find({'kind':'ATHLETE'}, function (err, user) {
          if (err) throw err;
          res.json(user);
      });
});

/* Get all athletes in an age group */
router.get('/athletes/ageGroup/:ageGroup', Verify.verifyOrdinaryUser, Verify.verifyClubOfficalOrAgeManagerOrParent, function(req, res, next) {
      console.log("Get athletes in age group " + req.params.ageGroup);
      User.find({'kind':'ATHLETE','ageGroup':req.params.ageGroup}, function (err, user) {
          if (err) throw err;
          res.json(user);
      });
});

/* Get a specific user */
router.get('/:userId', Verify.verifyOrdinaryUser, function(req, res, next) {
      User.find({'_id':req.params.userId, function (err, user) {
          if (err) throw err;
          res.json(user);
      });
});

/* Update a specific user */
// router.put('/:userId', Verify.verifyOrdinaryUser, Verify.verifyClubOffical, function(req, res, next) {
//       User.find({'_id':req.params.userId, function (err, user) {
//           if (err) throw err;
//           res.json(user);
//       });
// });

//  Delete a specific user 
// router.delete('/:userId', Verify.verifyOrdinaryUser, Verify.verifyClubOffical, function(req, res, next) {
//       User.find({'_id':req.params.userId, function (err, user) {
//           if (err) throw err;
//           res.json(user);
//       });
// });





/* Registrations, logins etc */
router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }),
        req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
        if(req.body.kind) {
            user.kind = req.body.kind;
        }
        if(req.body.name) {
            user.name = req.body.name;
        }
        if(req.body.address) {
            user.address = req.body.address;
        }
        if(req.body.phone) {
            user.phone = req.body.phone;
        }
        if(req.body.email) {
            user.email = req.body.email;
        }
        if(req.body.ageGroupManaged) {
            user.ageGroupManaged = req.body.ageGroupManaged;
        }
        if(req.body.children) {
            user.children = req.body.children;
        }
        if(req.body.parents) {
            user.parents = req.body.parents;
        }
        if(req.body.ageGroup) {
            user.ageGroup = req.body.ageGroup;
        }
        if(req.body.athleteId) {
            user.athleteId = req.body.athleteId;
        }
        if(req.body.personalBests) {
            user.personalBests = req.body.personalBests;
        }
            user.save(function(err,user) {
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({status: 'Registration Successful!'});
            });
        });
    });
});

router.post('/login', function(req, res, next) {
  console.log("login user");
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
        
      var token = Verify.getToken(user);
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.get('/logout', function(req, res) {
    req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

module.exports = router;