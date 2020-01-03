const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {type: Sequelize.STRING, allowNull: false},
  description: {type: Sequelize.TEXT},
  url: {type: Sequelize.STRING},
  stack: {type: Sequelize.TEXT}
})

module.exports = Project
