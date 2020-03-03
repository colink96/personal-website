const {Project, Experience} = require('./server/db/models')
const db = require('./server/db')
const projects = [
  {
    title: 'Spray-R',
    img: 'can.png',
    github: 'https://github.com/string-cheese-fsa/spray-r',
    url:
      'https://www.youtube.com/watch?v=p1x6HlvMUgU&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=25&t=0s',
    description:
      'Spray-R is an augmented reality spray painting app that allows users to create, share, and download nearby art. Move your phone around like a spray can and express yourself digitally!',
    stack:
      'Node.js, Express, PostgreSQL, Sequelize, React Native, ViroReact, Redux'
  },
  {
    title: 'Rats!',
    github: 'https://github.com/colink96/ers-stackathon',
    url: 'https://egyptian-rats-stack.herokuapp.com',
    img: 'ratcon.png',
    description:
      'Rats is a simple app that allows users to play the popular classic card game Egyptian Rat Screw (a.k.a. Egyptian War) with others online. All of the game logic was written from scratch in Node.js and integrated with socket.io for real-time multiplayer.',
    stack: 'Node.js, Express, React, Socket.io'
  },
  {
    title: 'BotBuddies',
    github: 'https://github.com/Object-Oriented-Obfuscators/bot-buddies',
    url: 'http://botbuddies.herokuapp.com/',
    img: 'botcon.png',
    description:
      "A sample CRUD e-commerce site where users can purchase robot friends. Users can log in, and build, edit, and check out orders of valid shipments. Obviously not real, please don't be disappointed when your bot buddy doesn't arrive.",
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
