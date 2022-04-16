const { json } = require("body-parser");
const mongoose=require("mongoose");
const project = require('../../models/schema');

module.exports =async (projectname, createdby, projecttype, githubrepo, university, facultyid, date, description)=> {
  const connector = await mongoose.connect("mongodb+srv://ProjectDB:jasjsr1968@cluster0.pjhtk.mongodb.net/ProjectList?retryWrites=true&w=majority");
  await new project({
      projectname,
      createdby,
      projecttype, 
      githubrepo, 
      university, 
      facultyid, 
      date,
      description
    }).save();
  return json({
    status:"success"
  });
};




