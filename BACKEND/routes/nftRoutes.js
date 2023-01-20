const express = require("express") ;
const router = express.Router()
const nftController = require('../controllers/nftController')



router.route('/')
    .get(nftController.getAllNFTs)
    .post(nftController.create)
    

router.route('/:id')
    .get(nftController.getNFT)

module.exports = router