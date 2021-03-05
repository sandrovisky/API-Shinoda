const express = require ('express')
const routes = require('./routes')
const cors =  require('cors')

require('./database/index')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    app.use(cors())
    next()
})

app.use(routes)

app.listen(process.env.PORT || 3333);