const {Project} = require('./server/db/models')
const db = require('./server/db')
const projects = [
  {
    title: 'Spray-R',
    github: 'https://github.com/string-cheese-fsa/spray-r',
    url:
      'https://www.youtube.com/watch?v=p1x6HlvMUgU&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=25&t=0s',
    description:
      'Spray-R is an augmented reality graffiti geocaching app with which users can paint on flat surfaces using the motion of your phone, and save them to a location so other users can view those user-created drawings.',
    stack:
      'Node.js, Express, PostgreSQL, Sequelize, React Native, ViroReact, Redux'
  },
  {
    title: 'Rats!',
    github: 'https://github.com/colink96/ers-stackathon',
    url: 'https://egyptian-rats-stack.herokuapp.com',
    description:
      'Rats is a simple app that allows users to play the popular classic card game Egyptian Rat Screw (a.k.a. Egyptian War) with others in real-time online multiplayer. Players can join the game anonymously and can join an active game by "slapping" into the game; much like real ERS!',
    stack: 'Node.js, Express, React, Socket.io'
  }
]

const seed = async () => {
  await db.sync({force: true})
  await Promise.all(
    projects.map(project => {
      return Project.create(project)
    })
  )
  db.close()
}

seed()
