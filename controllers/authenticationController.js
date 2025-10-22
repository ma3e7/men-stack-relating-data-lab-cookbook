const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/signIn', (req, res)=> {
    res.render('signInView.ejs')
})

router.get('/signUp', (req, res)=> {
    res.render('signUpView.ejs')
})


module.exports = router;