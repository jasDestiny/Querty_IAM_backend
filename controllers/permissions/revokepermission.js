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
            description:"Invalid user token"
        });
        return;
    }
    await PermissionData.findOneAndDelete({
        rootuser:userid, userid:adduser, hyperlink
    });
    
    res.send({
        statuscode:"200",
        description:"Permission revoked successfully"
    });
    return;
}