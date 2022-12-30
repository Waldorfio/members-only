const express = require('express');
const router = express.Router();
const Message = require('../models/message');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { user: req.user });
// });

router.get('/', async (req, res, next) => {
  try {
    const msg_list = await Message.find();
    res.render('index', {
      user: req.user,
      messages: msg_list,
    });
  } catch(err) {
    console.error(err);
    res.redirect('error', err);
  }
})

module.exports = router;
