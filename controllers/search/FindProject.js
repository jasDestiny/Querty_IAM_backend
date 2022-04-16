const mongoose=require("mongoose");
const project = require('../../models/schema');

module.exports= async (projectname)=> {
    var x=await project.findOne({ projectname:projectname });
    return x;
};
