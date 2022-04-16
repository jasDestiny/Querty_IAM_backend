const mongoose=require("mongoose");
const permissionData=require("../../models/permissions");
const UserData=require("../../models/user");
const PermissionData=require("../../models/permissions");

module.exports= async (req, res)=>{
    let {userid, tokenval, adduser, hyperlink, request}=req.body;
    let x=await UserData.findOne({userid, tokenval});
    if(x===null){
        res.send({
            statuscode:"400",
            description:"Invalid"
        });
        return;
    }
    let z=await PermissionData.findOne({
        rootuser:userid, userid:adduser, hyperlink, request
    });

    if(z){
        res.send({
            statuscode:"400",
            description:"Given permission already exists"
        });
        return;
    }
    let y=new PermissionData({
        rootuser:userid, userid:adduser, hyperlink, request
    });
    await y.save();
    
    res.send({
        statuscode:"200",
        description:"Permission added successfully"
    });
    return;
}