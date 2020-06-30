var db = require('../database.js');

var sheetexerciseOperation = {

    getSheetExercises:function(id_sheet,callback) {
        return db.query("select se.*, substring_index(e.image_path, '/', -1) as imageUrl from exercise e join sheet_exercise se on e.title = se.exercise_title where se.id_sheet = ?", [id_sheet], callback);
        },  

    getSheetExerciseByDay:function(id_sheet,day,callback) {
        return db.query("select * from SHEET_EXERCISE where id_sheet=? and day=?", [id_sheet,day], callback);
        },
          
    addSheetExercise:function(sheetexercises, callback) {
        let exercises = [];
        for(let i=0; i<sheetexercises.length; i++) {
            let ex = [  null,
                        sheetexercises[i].exercise_title,
                        sheetexercises[i].exercise_muscle,
                        sheetexercises[i].id_sheet,
                        sheetexercises[i].day,
                        sheetexercises[i].exercise_mode,
                        sheetexercises[i].num_exercise,
                        sheetexercises[i].note ];
            exercises.push(ex);
        }
        return db.query("Insert into SHEET_EXERCISE (id,exercise_title,exercise_muscle,id_sheet,day,exercise_mode,num_exercise,note) values ?",[exercises],callback);
        },

    removeSheetExerciseBySheet:function(id_sheet, callback) {
            return db.query("Delete from SHEET_EXERCISE where Id_sheet=?", [id_sheet], callback);
        },

    removeSheetExercise:function(id, callback) {
        return db.query("Delete from SHEET_EXERCISE where Id=?", [id], callback);
        }
};

exports.sheetexerciseOperation=sheetexerciseOperation;