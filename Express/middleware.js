const checkLogInStatus = (req, res, next ) =>{
    console.log('running checkLogInStatus');
    if(req.path ==='/profile'){
    next();
    }else { 
        res.send("YOU ARE NOT LOGINED USER")
    }
}


const checkUser = (req , res, next) =>{
    console.log('running 2 middleware checkUser');
    next();
}

module.exports = {checkLogInStatus,checkUser};