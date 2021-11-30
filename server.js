const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const dbOperation = require('./database/dbOperation');
const Admins = require('./database/Admins');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());


app.post('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

//create admin
let Wairimu = new Admins(6, 'Wairimu', 'Wairimu234')


dbOperation.getAdmin().then(res =>{
    console.log(res.recordset);
})

dbOperation.createAdmin(Wairimu);

//console.log(Wairimu);



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
