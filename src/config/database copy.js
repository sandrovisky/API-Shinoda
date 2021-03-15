module.exports = {
    username: 'admin', //username created from SQL Management Studio
    password: 'admin',
    server: 'localhost/SQLEXPRESS',    //the IP of the machine where SQL Server runs
    dialect: "mssql",
    database: 'Shinoda',
    define: {
        timestamps: true
    },
    options: {
        instanceName: 'MSSQLSERVER',        
    }
}

module.exports = {
    username: 'admin', //username created from SQL Management Studio
    password: 'admin',
    server: 'localhost/SQLEXPRESS',    //the IP of the machine where SQL Server runs
    dialect: "mssql",
    database: 'Shinoda',
    define: {
        timestamps: true
    },
    options: {
        instanceName: 'MSSQLSERVER',        
    }
}

require('dotenv').config()
module.exports = {
    database: 'lencio18_sandro', 
    username: 'lencio18_sandro', 
    password: "Garcia@123c", 
    host: '162.241.203.81',
    dialect: 'mysql',
    
    // Use this if you're on Windows Azure
    dialectOptions: { 
        encrypt: true 
    },
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    } 
}