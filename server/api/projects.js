const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.send(projects)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id)
    res.send(project)
  } catch (error) {
    next(error)
  }
})
