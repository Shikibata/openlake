const express = require("express") ;
const router = express.Router()
const nftController = require('../controllers/nftController')



router.route('/')
    .post(nftController.create)
    



module.exports = router