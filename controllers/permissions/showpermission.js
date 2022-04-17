let PermissionData=require("../../models/permissions");
let  UserData=require("../../models/user");
module.exports= async (req, res)=>{
    let {userid, tokenval}=req.body;
    let x=await UserData.findOne({userid, tokenval});
    if(x===null){
        res.send({
            statuscode:400,
            description:"Invalid"
        });
        return;
    }

    let y=await PermissionData.find({userid});
    let z=await PermissionData.find({rootuser:userid});
    res.send({
        statuscode:200,
        description:"Success",
        assigned:y,
        assignedto:z
    });
    return;
}