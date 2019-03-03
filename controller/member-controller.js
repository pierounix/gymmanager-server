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
        
    addMember:function(member, callback) {
        return db.query("Insert into MEMBER values(null,?,?,?,?,?,?,?,?,?,?)",[ member.first_name, 
                                                                    member.last_name, 
                                                                    member.email,
                                                                    member.password, 
                                                                    member.date_of_birth.split('T')[0],
                                                                    member.expiry_date.split('T')[0], 
                                                                    member.address, 
                                                                    member.telephone, 
                                                                    member.status, 
                                                                    member.sheet],callback);
        },

    updateMember:function(id,member,callback){
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
                                member.date_of_birth.split('T')[0],
                                member.expiry_date.split('T')[0], 
                                member.address, 
                                member.telephone, 
                                member.status, 
                                member.sheet,
                                id],callback);
           }
};

exports.memberOperation=memberOperation;