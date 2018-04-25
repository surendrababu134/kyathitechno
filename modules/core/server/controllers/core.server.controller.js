'use strict';

/**
 * Render the main application page
 */
var nodemailer = require('nodemailer');
exports.renderIndex = function (req, res) {
  res.render('modules/core/server/views/index', {
    user: req.user || null
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};


var transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kyaathitechno@gmail.com',
    pass: '!2345Qwert',
  },
});


exports.sendContactEmail = function (req, res) {
  var mailOptions = {
    from: 'kyaathitechno@gmail.com',
    to: 'kyaathitechno@gmail.com',
    subject: 'Contact E-mail from ' + req.body.name,
    html: '<p>Hi Kyaathi Technologies,</p><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am ' + req.body.name + ' ' + req.body.textData + '<br/>Thanks & Regards<br/>' + req.body.name + '<br/>' + req.body.email + '<br/>' + req.body.phone,
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({
        'msgVal': 'error'
      });
    }
    console.log('Message sent: ${info.response}');
    res.json({
      'msgVal': 'success'
    });
  });

};
