const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/StudentDB", {
  useNewUrlParser: true
},
  err => {
    if (!err) {
      console.log("conenction succeeded!")
    } else {
      console.log("Eror in connection " + err)
    }
  }
)

require("./student.model")