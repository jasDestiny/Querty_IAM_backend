const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectname: {
    type: String,
    required: [true, 'projectname is required']
  },
  createdby: {
    type: String,
    required: [true, 'createdby is required']
  },
  projecttype: {
    type: String,
    required: [true, 'projecttype is required']
  },
  githubrepo: {
    type: String,
    required: [true, 'githubrepo is required']
  },
  university: {
    type: String,
    required: [true, 'university is required']
  },
  facultyid: {
    type: String,
    required: [true, 'facultyid is required']
  },
  date: {
    type: String,
    required: [true, 'date is required']
  },
  description:{
      type: String,
      required: [true, 'description is required']
  }

});

module.exports = mongoose.model("project", projectSchema, "project");