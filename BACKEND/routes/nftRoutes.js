const express = require("express") ;
const router = express.Router()
const nftController = require('../controllers/nftController')



router.route('/')
    .get(nftController.getAllNFTs)
    .post(nftController.create)
    



module.exports = router