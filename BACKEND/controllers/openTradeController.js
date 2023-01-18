const asyncHandler = require('express-async-handler')
const Profile = require('../models/Profile')
const Trade = require('../models/Trade')
const NFT = require('../models/NFT')


const create = asyncHandler(async (req,res) => {
    const { nft, profile_id } = req.body

    if(!nft || !profile_id){
        return res.status(400).json({ message: 'Profile ID, NFT required.'})
    }

    const profile = await Profile.findOne({'_id': profile_id }).exec()
    const boughtNFT = await NFT.findOne({"title": nft}).exec()

    if(profile.balance < boughtNFT.price) {
        return res.status(400).json({ message: 'Insufficient balance.'})
    }

    if(profile.balance > boughtNFT.price) {
        //create trade for the profile with the nft
        const open_datetime = new Date()
        const newTradeObject = {"nft_id": boughtNFT._id, profile_id, "open_price": boughtNFT.price, open_datetime }

        const newTrade = await Trade.create(newTradeObject)

        //remove NFT price from balance

        const newBalance = profile.balance - boughtNFT.price

        profile.balance = newBalance

        const updatedBalance = await profile.save()

        return res.json({ message: `Successfully bought ${boughtNFT.title} for ${boughtNFT.price} ETH. ${newBalance} ETH remaining`})
    }


})

module.exports = {create}