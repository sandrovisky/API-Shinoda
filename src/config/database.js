require('dotenv').config()
module.exports = {
    database: process.env.DATABASE_DATABASE_AND_USER, 
    username: process.env.DATABASE_DATABASE_AND_USER, 
    password: process.env.DATABASE_PASSWORD, 
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
}