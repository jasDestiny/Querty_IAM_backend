const mongoose=require("mongoose");
const UserData=require("../../models/user");
const crypto= require("crypto"); 
const tokenGen=require("./tokengenerator");
const processtime=require("../../util/processtime");

module.exports=async (req, res)=>{
    let userid=req.body.userid ;
    let password=req.body.password;
    let carr=req.body.carr;
    let tarr=req.body.tarr;
    carr=carr.replace(/'/g, '"');
    carr=JSON.parse(carr);

    tarr=tarr.replace(/'/g, '"');
    tarr=JSON.parse(tarr);
    
    // preprocess
    useridTime=processtime(carr, tarr, userid);
    passTime=processtime(carr, tarr, password);
    password=crypto.createHash('md5').update(req.body.password).digest('hex');
    
    let x=await UserData.findOne({userid:userid});
    
    if(x!==null){
        res.send({
            statuscode:"userid already exists"
        });
        return;
    }
    
    let tokenval=tokenGen();
    await new UserData({
        userid:userid,
        password:password,
        useridarr:useridTime,
        passarr:passTime,
        tokenval:tokenval
    }).save();

    res.json({
        status:"200",
        tokenval:tokenval,
        useridTime:useridTime, 
        passTime: passTime
    });
    return;
}