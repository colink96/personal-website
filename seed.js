const {Project} = require('./server/db/models')
const db = require('./server/db')
const projects = [
  {
    title: 'Spray-R',
    url: 'https://github.com/string-cheese-fsa/spray-r',
    description:
      'Spray-R is an augmented reality graffiti geocaching app with which users can paint on flat surfaces using the motion of your phone, and save them to a location so other users can view those user-created drawings.',
    stack:
      'Node.js, Express, PostgreSQL, Sequelize, React Native, ViroReact, Redux'
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
