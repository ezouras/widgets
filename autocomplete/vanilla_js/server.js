var express = require("express");
var app = express();
var fs = require("fs");
let rawdata_capitols = fs.readFileSync('state_capitols.json');
let capitol_api = JSON.parse(rawdata_capitols);

app.get("/", (req,res)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(capitol_api);
});

app.listen(3000,()=>{ console.log("listening on port 3000")});
