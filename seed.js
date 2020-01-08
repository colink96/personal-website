const {Project, Experience} = require('./server/db/models')
const db = require('./server/db')
const projects = [
  {
    title: 'Spray-R',
    github: 'https://github.com/string-cheese-fsa/spray-r',
    url:
      'https://www.youtube.com/watch?v=p1x6HlvMUgU&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=25&t=0s',
    description:
      'A React Native mobile application that allows users to emulate spray painting in augmented reality and save their drawings to a 100 meter radius of a location, so that other users may view and download their drawings. It is a clean, modern take on graffiti subculture.',
    stack:
      'Node.js, Express, PostgreSQL, Sequelize, React Native, ViroReact, Redux'
  },
  {
    title: 'Rats!',
    github: 'https://github.com/colink96/ers-stackathon',
    url: 'https://egyptian-rats-stack.herokuapp.com',
    description:
      'Rats is a simple app that allows users to play the popular classic card game Egyptian Rat Screw (a.k.a. Egyptian War) with others online. All of the game logic was built from scratch in Node.js and integrated with socket.io for real-time multiplayer.',
    stack: 'Node.js, Express, React, Socket.io'
  },
  {
    title: 'BotBuddies',
    github: 'https://github.com/Object-Oriented-Obfuscators/bot-buddies',
    url: 'http://botbuddies.herokuapp.com/',
    description:
      'A sample e-commerce site where users can purchase robot friends.',
    stack: 'Node.js, Express, React, Redux, PostgreSQL, Sequelize'
  }
]

const experiences = [
  {
    company: 'LG Electronics',
    title: 'Supply Chain Intern',
    description:
      'Developed scripts to automate daily reporting of inventory on backorder and in transit, saving up to 2 hours every day reducing chances of error. Released and filled approximately 12,000 orders to customers as per executive allocation of inventory, available inventory, and inventory in transit',
    date: 'June 2018 - August 2018',
    location: 'Englewood Cliffs, NJ'
  }
]

const seed = async () => {
  await db.sync({force: true})
  await Promise.all(
    projects.map(project => {
      return Project.create(project)
    })
  )
  await Promise.all(
    experiences.map(experience => {
      return Experience.create(experience)
    })
  )
  db.close()
}

seed()
