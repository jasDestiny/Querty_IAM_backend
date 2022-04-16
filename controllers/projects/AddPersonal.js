const findProject= require("../search/FindProject");
const createProject= require("./CreateProject");

module.exports= async (req, res)=>{
        console.log(req.body)
        const projectname = req.body.projectname;
        const createdby= req.body.createdby;
        const projectype= "PERSONAL";
        const githubrepo= req.body.githubrepo;
        const university= "NA";
        const facultyid= "NA";
        const enddate= req.body.enddate;
        const projectdescription= req.body.projectdescription;
        
        let x= await findProject(projectname);
        if(x!==null){
          res.send("Use an alternative projectname");
          return;
        }
          
        else {
          user = await createProject(projectname, createdby, projectype, githubrepo, university, facultyid, enddate, projectdescription);
          res.send("success");
          return;
        }  
        
        
};