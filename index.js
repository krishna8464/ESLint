const express = require("express");
const app = express()

app.get("/", (req,res) => {
    val=5000
    console.log("success")
})



app.listen(5050, () => {
    console.log("The port is running at 5050")
})