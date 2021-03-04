const express = require ('express')
const routes = require('./routes')
const cors =  require('cors')

require('./database/index')

const app = express()

app.use(cors({ origin: true, // "true" will copy the domain of the request back
// to the reply. If you need more control than this
// use a function.

credentials: true, // This MUST be "true" if your endpoint is
     // authenticated via either a session cookie
     // or Authorization header. Otherwise the
     // browser will block the response.

methods: 'POST,GET,PUT,OPTIONS,DELETE' }));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://shinoda-app.herokuapp.com/")
//     res.header("Access-Control-Allow-Headers", "*")
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
//     next()
// })

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333);