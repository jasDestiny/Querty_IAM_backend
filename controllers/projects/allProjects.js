const project=require("../../models/schema");

module.exports=async (req, res)=>{
    let x= await project.find({});
    res.send(x);
};