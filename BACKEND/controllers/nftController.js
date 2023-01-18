const asyncHandler = require('express-async-handler')
const NFT = require('../models/NFT')


//@desc Get all NFT
//@route GET /NFT
//@access Private
const getAllNFTs = asyncHandler(async (req,res) => {
    const NFTs = await NFT.find().lean()
    if(!NFTs?.length){
        return res.status(400).json({message: 'No NFT found'})
    }
    res.json(NFTs)
})

//create for test POST
const create = asyncHandler(async (req,res) => {
        const { title, creator, price, image } = req.body

         //Confirm data
    if(!title || !creator || !price ||!image) {
        return res.status(400).json( {message: 'All fields are required.'})
    }

    //Check for duplicate 

    const duplicate = await NFT.findOne({ title }).lean().exec()

    if(duplicate) {
        return res.status(409).json({ message: 'Duplicate NFT' })
    }

    const nftObject = { title, creator, price, image }

    const createdNFT = await NFT.create(nftObject)

    res.json({message: `${createdNFT.title} created`})
})

module.exports = {create, getAllNFTs}