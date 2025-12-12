const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/signIn', (req, res)=> {
    res.render('auth/signInView.ejs')
})

router.get('/signUp', (req, res)=> {
    res.render('auth/signUpView.ejs')
})

router.get('/signUp', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;