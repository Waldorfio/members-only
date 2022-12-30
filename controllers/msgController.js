const Message = require('../models/message');

const { body, validationResult } = require('express-validator');
const async = require('async');
const { DateTime } = require("luxon");


const msg_post = async (req, res, next) => {
  try {
    await Message.create({
        username: req.user.username,
        text: req.body.msg,
    });
    console.log('Msg created! ');
    res.redirect('/');
  } catch(err) {
      console.error(err);
      res.redirect('error', err);
  }
}

module.exports = {
    msg_post,
}