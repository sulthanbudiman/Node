const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-

const cors = require("cors") // memanggil library cors
const app = express()
//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end pint dapat diakses oleh cross platform
app.use(cors())
// end-point "/bujur_sangkar" dengan method POST 
app.post("/bujur_sangkar", (req,res) => { 
    // menampubng data yang dikirimkan dan mengkonversi menjadi tipe nume rik 
    let panjang = Number(req.body.panjang) // mengambil nilai panjang da ri body 
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body 
    let luas = panjang * lebar 
    let keliling = 2 * (panjang + lebar) 
    // membuat objek yang berisi data yang akan dijadikan response 
    let response = { 
        panjang: panjang, 
        lebar: lebar, 
        luas: luas, 
        keliling: keliling } 
        // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response) })
    
app.listen(8000, ()=> {
    console.log("server run on port 8000");
})
