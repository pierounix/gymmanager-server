var db = require('../database.js');

var exerciseOperation = {

    getAllExercises:function(callback) {
        return db.query("Select * from EXERCISE", callback); 
        },
        
    getExerciseById:function(id,callback) {
        return db.query("select * from EXERCISE where Id=?", [id], callback);
        },
    
    getExerciseByMuscle:function(muscle,callback) {
        return db.query("select * from EXERCISE where muscle=?", [muscle], callback);
        },    
    
    addExercise:function(exercise, callback) {
        return db.query("Insert into EXERCISE values(null,?,?,?,?)",[exercise.title, exercise.description, exercise.muscle, exercise.image_path],callback);
        },

    updateExercise:function(exercise,callback){
            return db.query(`update exercise 
                            set title=?,
                            description=?, 
                            muscle=?,
                            image_path=?
                            where Id=?`,
                            [exercise.title,
                            exercise.description,
                            exercise.muscle,
                            exercise.image_path,
                            exercise.id],callback);
           },
              
    removeExercise:function(id,callback) {
        return db.query("Delete from EXERCISE where Id=?", [id], callback);
        }
};

exports.exerciseOperation=exerciseOperation;