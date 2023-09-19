const router = require('express').Router()
const user = require('../models/User')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        // if (!req.body.image) req.body.image = undefined
        await new user(req.body).save()
        res.status(201).json({ 'message': 'User created' })
    } catch (error) {
        console.log('error creating User:', error)
        res.json({ 'message': 'error creating User' })
    }
})


router.get('/', async (req, res) => {
    const Users = await user.find()
    res.json(Users)
})

module.exports = router