
const config = {
    user:'Prison001',
    password:'PrisonX25',
    server:'SUSAN',
    Host:'localhost',
    database:'prisons',
    ConnectionTimeOut: 300000,
    requestTimeout: 300000,
    options:{
        trustServerCertificate:true,
        trustedConnection: false,
        enableArithAbort: true,
    },
    port:1433
}

module.exports = config;