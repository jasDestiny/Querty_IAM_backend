const mongoose=require("mongoose");

const persmissionModel=new mongoose.Schema({
    userid:{
        type:String,
        required: [true, 'userid is required']
    },
    rootuser:{
        type:String,
        required: [true, 'password is required']
    },
    hyperlink:{
        type:String,
        required:true
    },
    request:{
        type:String,
        enum : ['POST','GET'],
        default: 'GET'
    }
});

module.exports= mongoose.model("PermissionData", persmissionModel, "PermissionData");