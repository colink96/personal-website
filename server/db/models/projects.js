const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {type: Sequelize.STRING, allowNull: false},
  img: {type: Sequelize.STRING},
  description: {type: Sequelize.TEXT},
  github: {type: Sequelize.STRING},
  url: {type: Sequelize.STRING},
  stack: {type: Sequelize.TEXT}
})

module.exports = Project
