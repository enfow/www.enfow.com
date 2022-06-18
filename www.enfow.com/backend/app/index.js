require("./models/db")

const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")

const studentController = require("./controllers/studentController")

const PORT = process.env.PORT || 8000

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

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.use("/student", studentController);
