const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const dbOperation = require('./database/dbOperation');
const Admins = require('./database/Admins');
const Officers = require('./database/Officer');
const Prisoners = require('./database/Prisoners');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());

//fetch officer data
app.get('/api', async (req, res) => {
  console.log('officer');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getOfficer(req.headers);
  res.send(result.recordset);
});


//fetch prisoners data
app.get('/pris', async (req, res) => {
  console.log('prisoner');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getPrisoner(req.headers);
  res.send(result.recordset);
});

//fetch court details
app.get('/cas', async (req, res) => {
  console.log('cases');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getCase(req.headers);
  res.send(result.recordset);
});


//prisoners transfer details
app.get('/tran', async (req, res) => {
  console.log('cases');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getTransfer(req.headers);
  res.send(result.recordset);
});


//Visitors list
app.get('/vis', async (req, res) => {
  console.log('visitor');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getVisitor(req.headers);
  res.send(result.recordset);
});


//Officer details
app.get('/det', async (req, res) => {
  console.log('details');
  res.setHeader('Content-Type', 'application/json');
  let result=await dbOperation.getDetails(req.headers);
  res.send(result.recordset);
});


// eslint-disable-next-line no-lone-blocks
{/**
let Mwaki = new Officers(64343965, '0794323444','NAKURU','KIGANJO','2021-01-12')

dbOperation.getOfficer().then(res =>{
    console.log(res.recordset);
})

dbOperation.createOfficer(Mwaki);

console.log(Mwaki);

*/}



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
