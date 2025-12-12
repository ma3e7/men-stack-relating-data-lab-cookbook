const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel.js');

//------------------------ GET ROUTES -------------------------
router.get('/users/:userId/food', (req, res) => {
    
})
//------------------------ POST ROUTES -------------------------
router.post('/users/:userId/food/new', (req, res) => {

})
//------------------------ PUT ROUTES -------------------------
router.put('/users/:userId/food/:itemId/update', (req, res) => {

})
//------------------------ DELETE ROUTES -------------------------
router.delete('/users/:userId/food/:itemId/delete', (req, res) => {
    
})


module.exports = router;