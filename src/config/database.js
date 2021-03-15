require('dotenv').config()
module.exports = {
    database: process.env.DATABASE_DATABASE, 
    username: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    host: process.env.DATABASE_HOST,
    dialect: 'mssql',
    
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