const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    userid:{
        type:String,
        required: [true, 'userid is required']
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    useridarr:{
        type:[Number],
        required:true
    }, 
    passarr:{
        type:[Number],
        required:true
    },
    tokenval:{
        type:String,
        required: [true, 'tokenval is not mandatory']
    }
});

module.exports= mongoose.model("UserData", UserSchema, "UserData");