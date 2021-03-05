module.exports = {
    database: 'shinoda1', 
    username: 'sandrovisky', 
    password: 'shinoda!123', 
    host: 'sandrovisky.database.windows.net',
    dialect: 'mssql',
    
    // Use this if you're on Windows Azure
    dialectOptions: { 
        encrypt: true 
    },
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }     
}