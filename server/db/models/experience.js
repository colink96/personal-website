const Sequelize = require('sequelize')
const db = require('../db')

const Experience = db.define('experience', {
  company: {type: Sequelize.STRING},
  title: {type: Sequelize.STRING},
  description: {type: Sequelize.TEXT},
  date: {type: Sequelize.STRING},
  location: {type: Sequelize.TEXT}
})

module.exports = Experience
