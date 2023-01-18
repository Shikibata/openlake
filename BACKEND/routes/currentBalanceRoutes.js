const express = require("express") ;
const router = express.Router()
const wireController = require('../controllers/wireController')



router.route('/')
    .get(wireController.getBalance)
    



module.exports = router