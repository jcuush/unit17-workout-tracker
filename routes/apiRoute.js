const { PromiseProvider } = require("mongoose");
const db =require("../models");

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
    })

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create({})
           .then(dbWorkout => {
               res.json(dbWorkout)
           })
           .catch(({message}) => {
               console.log(message)
           })
    })

    app.put("/api/workouts/:id", (req, res) => {
        let id = req.params.id;
        let data = req.body;

        db.Workout.findByIdAndUpdate(id, {
            $push: {exercises: data},
            $push: {totalDuration: data}
        }).then(dbUpdate => {
            res.send(dbUpdate)
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
    })
}