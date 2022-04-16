const mongoose=require("mongoose");
const permissionData=require("../../models/permissions");
const UserData=require("../../models/user");
const PermissionData=require("../../models/permissions");
const axios = require("axios");

module.exports= async (req, res)=>{
    let {userid, tokenval, rootuser, hyperlink, request}=req.body;
    let x=await UserData.findOne({userid, tokenval});
    if(x===null){
        res.send({
            statuscode:"400",
            description:"Invalid user token"
        });
        return;
    }

    let y=await PermissionData.findOne({userid, rootuser, hyperlink, request});
    if(y===null){
        res.send({
            statuscode:"400",
            description:"IAM user permissions denied"
        });
        return;
    }
    let options={
        method: request,
        url: hyperlink,
    };
    
    var responseData=null;
    if(request==="POST"){
        axios.post(hyperlink, req.body)
        .then(function (response) {
            responseData=response.data;
        })
        .catch(function (error) {
            responseData=error;
        });
    }
    else if(request==="GET"){
        axios.get(hyperlink, req.body)
        .then(function (response) {
            responseData=response;
        })
        .catch(function (error) {
            responseData=error;
        });
    }
    res.send(responseData);
    return;
}