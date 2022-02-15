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

//Register visitors
app.post("/regVisitor", async (req, res) => {
  // const { firstName, lastName } = req.body;
  console.log("Visitor Registration");
  await dbOperation.createVisitor(req.body);
  const result = await dbOperation.getVisitor(req.body);
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

// eslint-disable-next-line no-lone-blocks
{
  /**
let Mwaki = new Officers(64343965, '0794323444','NAKURU','KIGANJO','2021-01-12')

dbOperation.getOfficer().then(res =>{
    console.log(res.recordset);
})

dbOperation.createOfficer(Mwaki);

console.log(Mwaki);

*/
}

app.listen(PORT, () =>
  console.log(`Express server is running on localhost:${PORT}`)
);
