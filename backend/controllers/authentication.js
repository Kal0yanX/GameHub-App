const router = require('express').Router()
const bcrypt = require('bcrypt')
const user = require('../models/User')
const jwt = require('json-web-token')

router.post('/', async (req, res) => {
    const user = await User.findOne({ name: req.body.name })
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json(`logged in as ${ User.username }`)
    }
})

module.exports = router