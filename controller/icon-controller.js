var db = require('../database.js');

var iconOperation = {

    getAllIcons:function(callback){
        return db.query("Select * from icon", callback); 
        },
        
    getIconById:function(id,callback){
        return db.query("select * from icon where Id=?", [id], callback);
        },
};

exports.iconOperation=iconOperation;