const express = require("express") ;
const router = express.Router()
const openTradeController = require('../controllers/openTradeController')



router.route('/')
    .post(openTradeController.create)
    



module.exports = router