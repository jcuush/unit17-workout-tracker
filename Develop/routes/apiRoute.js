const Workout = require("../models/workout")

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
    })
}
   
