var db = require('../database.js');

var sheetOperation = {

        
        getSheetById:function(id,callback) {
                return db.query("select * from sheet where Id=?",[id],callback);
                },

        getSheetByMemberId:function(id,callback) {
                return db.query("select * from sheet where Id_member=?",[id],callback);
                },
        
        addSheet:function(sheet, callback) {
                return db.query("Insert into sheet (id_member,start_date,end_date,sheet_name) values(?,?,?,?)",[sheet.id_member, sheet.start_date, sheet.end_date, sheet.sheet_name],callback);
                },
        
        updateSheet:function(sheet,callback){
                var start_date_param,end_date_param;
                if(sheet.start_date == null) {
                        start_date_param = null;
                } else {
                        start_date_param =sheet.start_date.split('T')[0];
                }
                if(sheet.end_date == null) {
                        end_date_param = null;
                } else {
                        end_date_param =sheet.end_date.split('T')[0];
                }
                        return db.query(`update sheet 
                                        set start_date=?,
                                        end_date=?, 
                                        sheet_name=?
                                        where Id=?`,
                                        [start_date_param,
                                         end_date_param,
                                         sheet.sheet_name,
                                         sheet.id],callback);
                },
        removeSheet:function(id, callback) {
                return db.query("Delete from sheet where Id=?", [id], callback);
                }
};

exports.sheetOperation=sheetOperation;