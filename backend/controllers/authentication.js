const router = require('express').Router()
const bcrypt = require('bcrypt')
const user = require('../models/User')
const jwt = require('json-web-token')

router.post('/', async (req, res) => {
    const User = await user.findOne({username: req.body.username})
    console.log(req.body, User)
    if (!User || !await bcrypt.compare(req.body.password, User.password)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json(`logged in as ${ User.username }`)
    }
})

module.exports = router