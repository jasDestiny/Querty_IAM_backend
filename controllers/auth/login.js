const mongoose=require("mongoose");
const UserData=require("../../models/user");
const crypto= require("crypto"); 
const tokenGen=require("./tokengenerator");
const processtime=require("../../util/processtime");
const clusteringalgo = require("../../util/clusteringalgo");

module.exports=async (req, res)=>{
    let userid=req.body.userid ;
    let password=req.body.password;
    let x=await UserData.findOne({userid:userid});

    // Integrating the clustering algo

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
    if(x===null){
        res.json({
            statuscode:"invalid user credentials"
        });
        return;
    }
    let a=clusteringalgo(x.useridarr, useridTime);
    let b=clusteringalgo(x.passarr, passTime);
    console.log(a, b);
    
    if(!a || !b){
        res.send({
            status:"400",
            statuscode:"invalid keystroke"
        });
        return;
    }
    let tokenval=tokenGen();

    await UserData.updateMany({userid:userid},{$set: {authtoken:tokenval}})
    res.json({
        status:"200",
        tokenval:tokenval
    });
    return;
}