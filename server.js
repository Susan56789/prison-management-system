const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const dbOperation = require("./database/dbOperation");

const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

var corsOptions = {
  origin: "*",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const PORT = process.env.PORT || 3001;

// enable CORS
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.send("Welcome to Prison System server");
});

//get prisons names
app.get("/prisons", async (req, res) => {
  console.log("List of prisons");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getNewP(req.headers);
  res.send(result.recordset);
});

//fetch officer data
app.get("/api", async (req, res) => {
  console.log("officer");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getOfficer(req.headers);
  res.send(result.recordset);
});

//fetch prisoners data
app.get("/pris", async (req, res) => {
  console.log("prisoner");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getPrisoner(req.headers);
  res.send(result.recordset);
});

//fetch court details
app.get("/cas", async (req, res) => {
  console.log("cases");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getCase(req.headers);
  res.send(result.recordset);
});

//prisoners transfer details
app.get("/tran", async (req, res) => {
  console.log("cases");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getTransfer(req.headers);
  res.send(result.recordset);
});

//Get comments
app.get("/comment", async (req, res) => {
  console.log("comments");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getComments(req.headers);
  res.send(result.recordset);
});

//Visitors list
app.get("/vis", async (req, res) => {
  console.log("visitor");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getVisitor(req.headers);
  res.send(result.recordset);
});

//Officer details
app.get("/det", async (req, res) => {
  console.log("details");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getDetails(req.headers);
  res.send(result.recordset);
});

//New Prisons
app.get("/np", async (req, res) => {
  console.log("new prison");
  res.setHeader("Content-Type", "application/json");
  let result = await dbOperation.getNewP(req.headers);
  res.send(result.recordset);
});

//Logins

app.post("/adminLogin", (req, res) => {
  const id = req.body.id;
  const pwd = req.body.password;
  const Data = dbOperation.getAdmin();

  const result = Data.recordset;

  console.log("Admin Login");

  result.map((userData) => {
    // return 400 status if username/password is not exist
    if (!id || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required.",
      });
    }

    // return 401 status if the credential is not match.
    if (id !== userData.Admin_Id || pwd !== userData.Admin_Password) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong.",
      });
    }

    return res.json({ user: userData });
  });
});
app.post("/userLogin", async (req, res) => {
  const id = req.body.id;
  const pwd = req.body.password;
  const Data = await dbOperation.getOfficer();

  const result = Data.recordset;
  console.log(result);

  result.map((userData) => {
    // return 400 status if username/password is not exist
    if (!id || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required.",
      });
    }
    // return 401 status if the credential is not match.
    if (id !== userData.id || pwd !== userData.password_) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong.",
      });
    }

    return res.json({ user: userData });
  });
});

app.post("/officerLogin", async (req, res) => {
  const id = req.body.id;
  const pwd = req.body.password;
  const Data = await dbOperation.getOfficer();

  const result = Data.recordset;
  console.log(result);
  result.map((userData) => {
    // return 400 status if username/password is not exist
    if (!id || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required.",
      });
    }
    // return 401 status if the credential is not match.
    if (id !== userData.id || pwd !== userData.password_) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong.",
      });
    }

    return res.json({ user: userData });
  });
});

//Registrations

app.post("/newOfficers", async (req, res) => {
  const sql = require("mssql");
  const config = require("./database/dbConfig");
  let conn = await sql.connect(config);

  console.log("New officers >>>", req.body);

  try {
    let officer = await conn.request().query(
      `INSERT INTO officerdetails VALUES (${req.body.id},'${req.body.firstname}','${req.body.lastname}', 
      '${req.body.address_}','${req.body.dateofbirth}','${req.body.gender}',${req.body.telephone},'${req.body.education}',
      '${req.body.experience}', '${req.body.password_}') 

        `
    );
    return officer;
  } catch (error) {
    console.log(error);
  }
});

//Register visitors
app.post("/regVisitor", async (req, res) => {
  console.log("Visitor Registration");

  const sql = require("mssql");
  const config = require("./database/dbConfig");
  let conn = await sql.connect(config);

  console.log(req.body);
  try {
    let visitor = await conn.request()
      .query(`INSERT INTO visitor VALUES(${req.body.id},'${req.body.fullname}',
    '${req.body.address}', '${req.body.Month}','${req.body.timein}','${req.body.timeout}','${req.body.relationship}',
    '${req.body.telephone}','${req.body.prisoner}'
    )`);

    return visitor;
  } catch (error) {
    console.log(error);
  }
});

app.post("/newPrisoners", async (req, res) => {
  const sql = require("mssql");
  const config = require("./database/dbConfig");
  let conn = await sql.connect(config);

  console.log(req.body);
  try {
    let prisoner = await conn.request()
      .query(`INSERT INTO registration VALUES(${req.body.id}, '${req.body.fullname}', '${req.body.dateofbirth}','${req.body.datein}',
      '${req.body.dateout}', '${req.body.address}', '${req.body.county}', '${req.body.gender}', '${req.body.education}',
      '${req.body.status}','${req.body.offence}', '${req.body.sentence}','${req.body.filenum}', '${req.body.prison}'
      )`);

    return prisoner;
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Express server is running on localhost:${PORT}`)
);
