const asyncHandler = require('express-async-handler')
const NFT = require('../models/NFT')


//@desc Get one NFT
//@route GET /explore/:id
//@access Private
const getNFT = asyncHandler(async (req,res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({message: 'No NFT found.'})
    }
    const NFT = await NFT.findByID(id).exec()
    

    res.json(NFT)
})

//@desc Get all NFT
//@route GET /explore
//@access Private
const getAllNFTs = asyncHandler(async (req,res) => {
    const NFTs = await NFT.find().lean()
    if(!NFTs?.length){
        return res.status(400).json({message: 'No NFT found.'})
    }
    const fivePopular = await NFT.find().sort().limit(5).exec()
    const fiveNewest = await NFT.find().limit(5).exec()

    res.json({NFTs, fiveNewest, fivePopular})
})

//create for test POST
const create = asyncHandler(async (req,res) => {
        const { title, creator, price, image } = req.body
        const date = new Date()

         //Confirm data
    if(!title || !creator || !price ||!image) {
        return res.status(400).json( {message: 'All fields are required.'})
    }

    //Check for duplicate 

    const duplicate = await NFT.findOne({ title }).lean().exec()

    if(duplicate) {
        return res.status(409).json({ message: 'Duplicate NFT' })
    }

    const nftObject = { title, creator, price, image, "created_date": date }

    const createdNFT = await NFT.create(nftObject)

    res.json({message: `${createdNFT.title} created`})
})

const deleteNFT = asyncHandler(async (req,res) => {
    const { title } = req.body
    if(!title ) {
        return res.status(400).json( {message: 'All fields are required.'})
    }

    const deletedNFT= await NFT.findOne({title}).exec()

    await deletedNFT.remove()
    const reply = `NFT ${deletedNFT.title} deleted`

    res.json(reply)

})

module.exports = {
    create, 
    getAllNFTs,
    getNFT,
    deleteNFT
}

//delete DELETE

