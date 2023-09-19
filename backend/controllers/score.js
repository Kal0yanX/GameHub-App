const router = require('express').Router()
const score = require('../models/Score')

router.post('/', async (req, res) => {
    try {
        await new score(req.body).save()
        res.status(201).json({ 'message': 'score posted' })
    } catch (error) {
        console.log('error posting score:', error)
        res.json({ 'message': 'error posting score' })
    }
})

router.get('/', async (req, res) => {
    try {
        const scores = await score.find().sort({scoreNum:-1})
        res.status(201).json(scores)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router