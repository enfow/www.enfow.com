require("./models/db")

const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")

const studentController = require("./controllers/studentController")


var app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
  res.send(
    `
    <h2> Welcome </h2>
    `
  )
})

app.set("views", path.join(__dirname, "/views/"))

app.listen(3000, () => {
  console.log("server started at port 3000")
})

app.use("/student", studentController);
