var db = require('../database.js');

var iconOperation = {

    getAllIcons:function(callback){
        return db.query("Select * from icon", callback); 
        },
        
    getIconById:function(id,callback){
        return db.query("select * from icon where Id=?", [id], callback);
        },

    getIconByTitle:function(title,callback){
        return db.query("select * from icon where title=?", [title], callback);
        },

    addIcon:function(icon, callback) {
        return db.query("Insert into icon values(null,?,?)",[icon.title, icon.path],callback);
        },
};

exports.iconOperation=iconOperation;