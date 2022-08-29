const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/suc', (req, res, next) =>{
    res.send("SUCESSFUL")
})


module.exports = router;