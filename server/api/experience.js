const router = require('express').Router()
const {Experience} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await Experience.findAll()
    res.send(data)
  } catch (error) {
    next(error)
  }
})
