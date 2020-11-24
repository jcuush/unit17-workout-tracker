const Workout = require("../models/workout")


module.exports = function(app){ 
    
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
    app.post("/api/workouts", ({body}, res) => {
        console.log(body);
        Workout.create(body)
          .then(response => {
            res.json(response);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      app.put("/api/workouts/:id", (req, res) => {
          Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}})
          .then(data => {
          console.log(data);
          res.json(data);
          })
          .catch(err => {
          res.status(400).json(err);
          });
        });
        app.get("/api/workouts/range", (req, res) => {
            Workout.find({})
            .then(data => {
              res.json(data);
            })
            .catch(err => {
              res.status(400).json(err);
            });
        });
    
}
