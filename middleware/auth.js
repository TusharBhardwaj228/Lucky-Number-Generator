const jwt = require('jsonwebtoken');
const {UnauthenicateError} = require('../errors');

const authMiddleWare = (req,res,next)=>{
  const authorz = req.headers.authorization;
  if(!authorz || !authorz.startsWith('Bearer ')){
    throw new UnauthenicateError("Please mention token");
  }
  const token = authorz.split(' ')[1];
  try{
    const decodede = jwt.verify(token, process.env.JWT_SECRET);
    const {id, username} = decodede;
    req.user = {id,username};
    next();
  }
  catch(error){
    throw new UnauthenicateError("Not authorize to access this route..");
  }
}

module.exports=authMiddleWare;
