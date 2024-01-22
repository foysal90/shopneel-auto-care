const jwt = require("jsonwebtoken");


const verifyJwt = (req, res, next) => {
  
  const authorization = req.headers.authorization;
  //console.log(authorization)
  if (!authorization) {
    return res.status(401).send({error: true,message: 'unauthorized access'})
    }
  const token = authorization.split(' ')[1]
  //console.log('token ',token)
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (error, decoded) => {
    if (error) {
        return res.status.send({error:true, message:'Access denied'})
    }
    req.decoded = decoded;
    console.log(req.decoded = decoded)
    next()
  })
};
module.exports = { verifyJwt };
