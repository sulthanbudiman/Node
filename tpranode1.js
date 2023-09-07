const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.post((p))
app.post("/kubus", (req,res) => { 

    let sisi = Number(req.body.sisi) 
    let luaspermukaan = 6 * sisi * sisi 
    let volume = s * s * s 
    
    let response = { 
        sisi: sisi,  
        luaspermukaan: luaspermukaan, 
        volume: volume } 
        
    res.json(response) })
    
app.listen(4699, ()=> {
    console.log("server run on port 4699");
})
