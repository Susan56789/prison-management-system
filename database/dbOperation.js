const config = require("./dbConfig");

const sql = require("mssql");

//Admin
const getAdmin = async () => {
  try {
    let pool = await sql.connect(config);
    let Admin = pool.request().query("SELECT * from admin_tbl");
    console.log(Admin);
    return Admin;
  } catch (error) {
    console.log(error);
  }
};

const createAdmin = async (Admins) => {
  try {
    let pool = await sql.connect(config);
    let Admin = pool.request().query(`
        INSERT INTO admin_tbl VALUES (${Admins.Admin_Id},'${Admins.Admin_Name}', '${Admins.Admin_Password}')
        `);
    console.log(Admin);
    return Admin;
  } catch (error) {
    console.log(error);
  }
};

//Officer
const getOfficer = async () => {
  try {
    let pool = await sql.connect(config);
    let Officer = await pool.request().query("SELECT * from officer");
    console.log(Officer);
    return Officer;
  } catch (error) {
    console.log(error);
  }
};
const createOfficer = async (Officers) => {
  try {
    let pool = await sql.connect(config);
    let Officer = await pool.request().query(`
        INSERT INTO officer VALUES 
        (${Officers.National_id},
          '${Officers.Telephone}', 
          '${Officers.From_prison}',
          '${Officers.To_prison}', 
          '${Officers.Dateoftransfer}')
        `);
    console.log(Officer);
    return Officer;
  } catch (error) {
    console.log(error);
  }
};

//Prisoners

const getPrisoner = async () => {
  try {
    let pool = await sql.connect(config);
    let Prisoner = await pool.request().query("SELECT * from registration");
    console.log(Prisoner);
    return Prisoner;
  } catch (error) {
    console.log(error);
  }
};
const createPrisoner = async (prisoners) => {
  try {
    let pool = await sql.connect(config);
    let Prisoner = await pool.request().query(
      `
        INSERT INTO registration  VALUES (
            ${prisoners.id},
            ${prisoners.Fullname},
            ${prisoners.DOB},
            ${prisoners.datein},
            ${prisoners.dateout},
            ${prisoners.Address_},
            ${prisoners.County},
            ${prisoners.Gender},
            ${prisoners.Education},
            ${prisoners.MaritalStatus},
            ${prisoners.Offence},
            ${prisoners.Sentence},
            ${prisoners.File_num},
            ${prisoners.prison}
        `
    );
    console.log(Prisoner);
    return Prisoner;
  } catch (error) {
    console.log(error);
  }
};

//Court cases
const getCase = async () => {
  try {
    let pool = await sql.connect(config);
    let Case = await pool.request().query("SELECT * from court");
    console.log(Case);
    return Case;
  } catch (error) {
    console.log(error);
  }
};
const createCase = async (cases) => {
  try {
    let pool = await sql.connect(config);
    let Case = await pool.request().query(`
        INSERT INTO court VALUES (
            ${cases.National_Id},
            ${cases.File_number},
            ${cases.Dateoftrail},
            ${cases.Sentence},
            ${cases.Location_},
        `);
    console.log(Case);
    return Case;
  } catch (error) {
    console.log(error);
  }
};

//Transfers
const getTransfer = async () => {
  try {
    let pool = await sql.connect(config);
    let Transfer = await pool.request().query("SELECT * from transfers");
    console.log(Transfer);
    return Transfer;
  } catch (error) {
    console.log(error);
  }
};
const createTransfer = async (transfers) => {
  try {
    let pool = await sql.connect(config);
    let Transfer = await pool.request().query(`
        INSERT INTO transfers VALUES (
            ${transfers.National_id},
            ${transfers.File_num},
            ${transfers.From_prison},
            ${transfers.To_Prison},
            ${transfers.Dateoftransfer},
        `);
    console.log(Transfer);
    return Transfer;
  } catch (error) {
    console.log(error);
  }
};

//View visitors
const getVisitor = async () => {
  try {
    let pool = await sql.connect(config);
    let Visitor = await pool.request().query("SELECT * from visitor");
    console.log(Visitor);
    return Visitor;
  } catch (error) {
    console.log(error);
  }
};
const createVisitor = async (visit) => {
  try {
    let pool = await sql.connect(config);
    let Visitor = await pool.request().query(`
        INSERT INTO visitor VALUES (
            ${visit.id},
            ${visit.fullname},
            ${visit.address_},
            ${visit.dateofvisit},
            ${visit.timein},
            ${visit.timeout},
            ${visit.relationship},
            ${visit.telephone},
            ${visit.prisoner}
        `);
    console.log(Visitor);
    return Visitor;
  } catch (error) {
    console.log(error);
  }
};

//Officer Details
const getDetails = async () => {
  try {
    let pool = await sql.connect(config);
    let Officer = await pool.request().query("SELECT * from officerdetails");
    console.log(Officer);
    return Officer;
  } catch (error) {
    console.log(error);
  }
};
const createDetails = async (Officers) => {
  try {
    let pool = await sql.connect(config);
    let Officer = await pool.request().query(`
        INSERT INTO officerdetails VALUES (
            ${Officers.id},
            '${Officers.firstname}',
             '${Officers.lastname}',
             '${Officers.address_}', 
             '${Officers.dateofbirth},
             '${Officers.gender}',
             '${Officers.telephone}',
             '${Officers.education}',
             '${Officers.experience}',
             ')
        `);
    console.log(Officer);
    return Officer;
  } catch (error) {
    console.log(error);
  }
};

//New Prisons
const getNewP = async () => {
  try {
    let pool = await sql.connect(config);
    let Prison = await pool.request().query("SELECT * from newprison");
    console.log(Prison);
    return Prison;
  } catch (error) {
    console.log(error);
  }
};
const createNewP = async (newp) => {
  try {
    let pool = await sql.connect(config);
    let Prison = await pool.request().query(`
        INSERT INTO newprison VALUES (
            ${newp.pno},
            ${newp.pname},
            ${newp.location_},
            ${newp.opendate},
            ${newp.contact},
            ${newp.capacity}
             ')
        `);
    console.log(Prison);
    return Prison;
  } catch (error) {
    console.log(error);
  }
};

// Comments
const getComments = async () => {
  try {
    let pool = await sql.connect(config);
    let Comment = await pool.request().query("SELECT * from announce");
    return Comment;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAdmin,
  getAdmin,
  getOfficer,
  createOfficer,
  getPrisoner,
  createPrisoner,
  getCase,
  createCase,
  getTransfer,
  createTransfer,
  getVisitor,
  createVisitor,
  getDetails,
  createDetails,
  getNewP,
  createNewP,
  getComments,
};
