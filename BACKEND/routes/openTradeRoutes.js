const express = require("express") ;
const router = express.Router()
const tradeController = require('../controllers/tradeController')



router.route('/:id')
    .post(tradeController.create)
    



module.exports = router