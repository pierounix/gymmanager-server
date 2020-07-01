var db = require('../database.js');

var memberOperation = {

    getAllMembers:function(callback){
        return db.query("Select * from MEMBER",callback); 
        },
        
    getMemberById:function(id,callback){
        return db.query("select * from MEMBER where Id=?",[id],callback);
        },
    
    getMemberBySearch:function(search,callback){
        return db.query("select * from MEMBER where first_name like ? or last_name like ?",['%' +search +'%','%' +search+ '%'],callback);
        },

    getMemberByEmail:function(email,callback){
        return db.query("select * from MEMBER where email = ?",[email],callback);
        },
    
    getMemberByEmailAdmin:function(email,callback){
        return db.query("select * from MEMBER where email = ? and isAdmin = 1",[email],callback);
        },
        
    addMember:function(member, callback) {
        var date_of_birth_param, expiry_date_param;
        if(member.date_of_birth == null) {
            date_of_birth_param = null;
         } else {
            date_of_birth_param =member.date_of_birth.split('T')[0];
         }
        if(member.expiry_date == null) {
            expiry_date_param = null;
        } else {
            expiry_date_param =member.expiry_date.split('T')[0];
        }

        return db.query("Insert into MEMBER values(null,?,?,?,?,?,?,?,?,?,?,?)",[ member.first_name, 
                                                                    member.last_name, 
                                                                    member.email,
                                                                    member.password, 
                                                                    date_of_birth_param,
                                                                    expiry_date_param, 
                                                                    member.address, 
                                                                    member.telephone, 
                                                                    member.status, 
                                                                    member.sheet,
                                                                    0],callback);
        },

    updateMember:function(id,member,callback){
        var date_of_birth_param, expiry_date_param;
        if(member.date_of_birth == null) {
            date_of_birth_param = null;
         } else {
            date_of_birth_param =member.date_of_birth.split('T')[0];
         }
        if(member.expiry_date == null) {
            expiry_date_param = null;
        } else {
            expiry_date_param =member.expiry_date.split('T')[0];
        }
        
        return db.query(`update member 
                            set first_name=?,
                            last_name=?, 
                            email=?,
                            password=?,
                            date_of_birth=?, 
                            expiry_date=?, 
                            address=?,
                            telephone=?, 
                            status=?, 
                            sheet=? 
                            where Id=?`,
                            [   member.first_name, 
                                member.last_name, 
                                member.email,
                                member.password, 
                                date_of_birth_param,
                                expiry_date_param, 
                                member.address, 
                                member.telephone, 
                                member.status, 
                                member.sheet,
                                id],callback);
           },

        removeMember:function(id, callback) {
            return db.query("Delete from MEMBER where Id=?", [id], callback);
        }
};

exports.memberOperation=memberOperation;