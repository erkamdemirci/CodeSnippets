const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const path = require('path')

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const tasks = require('./routes/tasks')

const port = process.env.PORT || 5000

app.use(express.json())
// REACT APP BUILD SERVING
app.use('/', express.static(path.join(__dirname, './public/build')))
// REST API
app.use('/api/v1', tasks)
// INDEX ROUTING
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/build/index.html'))
})
// MIDDLEWARES
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
