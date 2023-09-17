const router = require('express').Router()
const user = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    try {
        if (!req.body.image) req.body.image = undefined
        await new user(req.body).save()
        res.status(201).json({ 'message': 'recipe created' })
    } catch (error) {
        console.log('error creating recipe:', error)
        res.json({ 'message': 'error creating recipe' })
    }
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router