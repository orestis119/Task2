const express = require("express")
const path = require("path")

const port = 1000
const app = express()

app.listen(port, () =>  console.log("Ready!!"))

app.use(express.static(path.join(__dirname, "files")))