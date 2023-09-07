const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const phi = Math.PI;

//NOMER 1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get (/"bangunruang"(req,res) =>{
// let panjang=Number(req.body.)
// })

app.post("/balok", (req, res) => {
  let panjang = Number(req.body.panjang);
  let lebar = Number(req.body.lebar);
  let tinggi = Number(req.body.tinggi);
  let volume = panjang * lebar * tinggi;
  let luasper =
    2 * (panjang + lebar) + 2 * (panjang + tinggi) + 2 * (lebar + tinggi);

  let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    volume: volume,
    luasper: luasper,
  };
  res.json(response);
});

app.post("/bola", (req, res) => {
  let radius = Number(req.body.radius);
  let volume = (4 / 3) * phi * Math.pow(radius, 3);
  let luasper = 4 * phi * Math.pow(radius, 2);

  let response = {
    radius: radius,
    volume: volume,
    luasper: luasper,
  };
  res.json(response);
});

app.post("/kubus", (req, res) => {
  let sisi = Number(req.body.sisi);
  let volume = Math.pow(sisi, 3);
  let luasper = 6 * Math.pow(sisi, 2);

  let response = {
    sisi: sisi,
    volume: volume,
    luasper: luasper,
  };
  res.json(response);
});

app.post("/kerucut", (req, res) => {
  let = Number(req.body.sisi);
  let tinggi = Number(req.body.tinggi);
  let selimut = Number(req.body.selimut);
  let volume = (1 / 3) * phi * Math.pow(radius, 2) * tinggi;
  let luasper = phi * Math.pow(radius, 2) + phi * radius * selimut;

  let response = {
    radius: radius,
    selimut: selimut,
    volume: volume,
    luasper: luasper,
  };
  res.json(response);
});

app.listen(9999, () => {
  console.log("running on port 9999");
});
