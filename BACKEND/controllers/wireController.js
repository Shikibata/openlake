const asyncHandler = require('express-async-handler')
const Profile = require('../models/Profile')
const Wire = require('../models/Wire')


const newWire = asyncHandler(async (req,res) => {
    const { profile_id, amount, withdrawal } = req.body

    if(!profile_id, !withdrawal, !amount) {
        return res.status(400).json({ message: 'Profile ID, amount and type deposit/withdrawal required.'})
    }
    const wireObject = { profile_id, amount, withdrawal }
    const createdWire = await Wire.create(wireObject)
    const profile = await Profile.findById(profile_id).exec()
    const balance = profile.balance
    let newBalance


    if(withdrawal === true && balance < amount) {
        res.json({message: `Not enough funds. ${balance} ETH available.`})
    }

    if (withdrawal === true &&  balance > amount){
        newBalance = balance - amount
        profile.balance = newBalance
        await profile.save()
        res.json({message: `${createdWire.amount} ETH withdrawed.`})
    }

    if (withdrawal === false){
        newBalance = balance + amount
        profile.balance = newBalance
        await profile.save()
        res.json({message: `${createdWire.amount} ETH added.`})
    }


})

//get profile balance GET /currentBalance

const getBalance = asyncHandler(async (req,res) => {
    const { id } = req.body
    const profile = await Profile.findById(id).exec()
    if(!balance){
        return res.status(400).json({message: 'No balance found'})
    }
    res.json(profile.balance)
})

module.exports = {
    newWire,
    getBalance
}
