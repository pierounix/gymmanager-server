var db = require('../database.js');

var iconOperation = {

    getAllIcons:function(callback){
        return db.query("Select * from ICON", callback); 
        },
        
    getIconById:function(id,callback){
        return db.query("select * from ICON where Id=?", [id], callback);
        },
};

exports.iconOperation=iconOperation;