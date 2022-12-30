const User = require('../models/user');

const { body, validationResult } = require('express-validator');
const async = require('async');

// EXCLUSIVE MEMBERSHIP ACCESS
const memberform_get = async (req, res, next) => {
try {
    console.log('+++You are now a member!')
    res.render('memberform');
    } catch(err) {
    console.error(err);
    res.redirect('error', err);
    }   
}

const memberform_post = [
  // Validate & sanitize
  body('secretcode').isLength({ min: 1 }).withMessage('code must be at least 1 character'),

  // Run async callback
  async (req, res) => {
    const errors = validationResult(req); // Capture any validation errors parsed above
    if (!errors.isEmpty()) {
      console.error(errors.array());
      res.send('Validation Error: '+errors.array()[0].msg);
    } else {
      try {
        if (req.body.secretcode === 'odin') {
          await User.findByIdAndUpdate(
            { _id: req.user.id },
            { $set: { membership: true } });
          console.log('----------Congrats! You are now part of the club!');
          res.redirect('/');
        } else {
          console.log('Incorrect code entered. Returning to homepage..')
          res.redirect('/');
        }
      } catch(err) {
        console.error(err);
        res.redirect('error', err);
      }
    }
  }
]

module.exports = {
    memberform_get,
    memberform_post,
}