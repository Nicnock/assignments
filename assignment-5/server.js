const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(express.static("public"))

const people = [{
    id:1,
    name: 'Ryker',
    age: "stupid",
    weight: "dumb",
    smatneeessssssss: "muy stupido",

}, {
    id: 2,
    name: 'Jon',
    age: 40,
    weight: 265,
}, {
    id: 3,
    name: 'Nicson',
    age: 13,
    weight: 120,
}];

app.get("/person/:id", function(req, res){
console.log(req.params)    
const id = req.params.id
const person = people.find(function(person){
    return person.id === Number(id)
})
res.send(person)
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
}) 

app.get('/ur-face', (req, res) => {
    res.send('Hello rykers ugly face')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
