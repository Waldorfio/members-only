const User = require('../models/user');

const { body, validationResult } = require('express-validator');
const async = require('async');
const { DateTime } = require("luxon");


const msg_post = async (req, res, next) => {
try {
    await Message.create({
        username: req.user.username,
        date: Date.now,
        text: req.body.msg,
    })
    } catch(err) {
    console.error(err);
    res.redirect('error', err);
    }
}

module.exports = {
    msg_post,
}