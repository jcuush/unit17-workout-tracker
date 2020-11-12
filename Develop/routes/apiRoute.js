const Workout = require("../models/workout")
const app =require("express");

module.exports = function(app){ 
    
    app.get("/",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
}
