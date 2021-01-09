const express = require('express')
const app = require('../app')
const router = express.Router()
const bodyParser = require("body-parser")
const login = require('./userSet/login') 
const restaurant = require('./restaurant/restaurant') 

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 
    extended: true
    }))

router.get('/',(req,res)=>{
    res.status(200).send("siema kutasie")
})

router.use('/dupa', (req,res)=>res.send("chuj dupa"))
router.use('/login', login)
router.use('/restaurant', restaurant)

// router.post('/chuj', (req,res)=>{
//     res.send(req.body)
// })


module.exports = router