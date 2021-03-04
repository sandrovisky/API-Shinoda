const express = require ('express')
const routes = require('./routes')
const cors =  require('cors')

require('./database/index')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://shinoda-app.herokuapp.com/")
    app.use(cors())
    next()
})

app.use(routes)

app.listen(process.env.PORT || 3333);