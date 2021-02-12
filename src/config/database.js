module.exports = {
    username: 'admin', //username created from SQL Management Studio
    password: 'admin',
    server: 'localhost/SQLEXPRESS',    //the IP of the machine where SQL Server runs
    dialect: "mssql",
    database: 'Shinoda',
    define: {
        timestamps: true,
    },
    options: {
        enableArithAbort: false,
        instanceName: 'MSSQLSERVER',
    }
}