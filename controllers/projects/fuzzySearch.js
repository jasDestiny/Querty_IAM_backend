const project= require("../../models/schema");

module.exports= async (req, res)=>{
    let {projectname, projectdescription}= req.body;
    let x= await project.find({});


    x=x.filter(y => y.projectname.replace(" ", "").replace(/[^a-zA-Z ]/g, "").toLowerCase().includes(projectname.replace(" ", "").replace(/[^a-zA-Z ]/g, "").toLowerCase()));
    console.log(x)
    res.send(x);
}