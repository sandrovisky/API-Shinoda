const express = require ('express')
const routes = require('./routes')
const cors =  require('cors')

require('./database/index')

const app = express()

app.use(cors({ origin: 'https://shinoda-app.herokuapp.com/' , credentials :  true,  methods: 'GET,PUT,POST,OPTIONS', allowedHeaders: 'Content-Type,Authorization' }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://shinoda-app.herokuapp.com/")
    res.header("Access-Control-Allow-Headers", "https://shinoda-app.herokuapp.com/")
    res.header("Access-Control-Allow-Methods", "https://shinoda-app.herokuapp.com/")
    
    app.use(cors)
    next()
})

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333);