const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

router.get('/res', (req,res)=>{
    res.status(200).send("tworzenie restauracji ")
})


module.exports = router