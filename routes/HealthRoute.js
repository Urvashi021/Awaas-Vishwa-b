const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.end('Awaas-Vishwa Backend App is healthy')
})

module.exports = router