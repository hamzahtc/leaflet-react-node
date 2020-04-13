const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const locationMap = new Map()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello!')
})
io.on('connection', socket => {
    socket.on('updateLocation', pos => {
      locationMap.set(socket.id, pos)
      console.log(pos)
    })
  
    socket.on('requestLocations', () => {
      socket.emit('locationsUpdate', Array.from(locationMap))
    })
  
    socket.on('disconnect', () => {
      locationMap.delete(socket.id)
    })
  })
  
  // Serve any static files built by React
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});


  server.listen(5000, err => {
    if (err) {
      throw err
    }
  
    console.log('server started on port 5000')
  })
  