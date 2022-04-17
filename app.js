require('dotenv').config();
const express=require("express");
const app=express();
const port= process.env.PORT;
const bodyParser=require("body-parser");
const mongoose= require("./config/MongooseConnect")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//working 
app.get("/", require("./controllers/home/welcomehome"));
app.post("/users/signup", require("./controllers/auth/signup"));
app.post("/users/addpermission", require("./controllers/permissions/addpermission"));
app.post("/users/revokepermission", require("./controllers/permissions/revokepermission"));
app.post("/users/collectdata", require("./controllers/collectdata/collectdata"));
app.post("/users/showpermission", require("./controllers/permissions/showpermission"));

// stack
app.post("/personal",require("./controllers/projects/AddPersonal"));
app.post("/faculty",require("./controllers/projects/AddProject"));
app.post("/student",require("./controllers/projects/AddProject"));
app.post("/allprojects", require("./controllers/projects/allProjects"));
app.post("/allprojects/fuzzysearch", require("./controllers/projects/fuzzySearch"));
app.post("/users/login", require("./controllers/auth/login"));   
app.post("/users/signup", require("./controllers/auth/signup"));   

app.get("/signup", function(req, res){
    console.log("REQUEST BODY SIGNUP:", req.query);
    res.json({data: "SAMPLE DATA SIGNUP GET"});
});

app.listen(port, ()=>console.log(`App is running on port ${port}`)); 