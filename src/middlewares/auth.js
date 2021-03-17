const jwt = require('jsonwebtoken')

module.exports = ( req, res, next ) => {
    const authHeader = req.headers["authorization"]

    if ( !authHeader )
        return res.status(401).send({ error: "Token não encontrado!"})
    
    const parts = authHeader.split(' ')

    if ( !parts.length === 2 )
        return res.status(401).send({ error: "Token error"})

    const [ scheme, token ] = parts

    if ( !/^Bearer$/i.test(scheme ))
        return res.status(401).send({ error: "Token erro de formatação"})
        
    jwt.verify( token, process.env.HASH_JWT, (err, decoded) => {
        if ( err ) return res.status(401).send({ error: "Token invalido"})

        req.idUsuario = decoded.id
        return next()
    })
}