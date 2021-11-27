const config = require('./dbConfig');

const sql= require('mssql');

//Admin
const getAdmin = async () =>{
    try{
        let pool = await sql.connect(config);
        let Admin = pool.request().query("SELECT * from admin_tbl");
        console.log(Admin);
        return Admin;
    }
    catch(error){
        console.log(error);
    }
}

const createAdmin = async (Admins) =>{
    try{
        let pool = await sql.connect(config);
        let Admin = pool.request().query(`
        INSERT INTO admin_tbl VALUES (${Admins.Admin_Id},'${Admins.Admin_Name}', '${Admins.Admin_Password}')
        `);
        console.log(Admin);
        return Admin;
    }
    catch(error){
        console.log(error);
    }
}





module.exports ={
    createAdmin,
    getAdmin
};