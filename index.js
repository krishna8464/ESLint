const app = require("express")();

app.get("/",(req,res)=>{
    console.log("success")
})



app.listen(5050,()=>{
    console.log("The port is running at 5050")
})