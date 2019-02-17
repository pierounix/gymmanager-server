var db = require('../database.js');

var sheetOperation = {

        
        getSheetById:function(id,callback) {
                return db.query("select * from SHEET where Id=?",[id],callback);
                },
        
        addSheet:function(sheet, callback) {
                console.log(sheet);
                return db.query("Insert into SHEET values(null,?,?,?,?)",[sheet.id_member, sheet.start_date, sheet.end_date, sheet.sheet_name],callback);
                },
        
        updateSheet:function(sheet,callback){
                        return db.query(`update sheet 
                                        set start_date=?,
                                        end_date=?, 
                                        sheet_name=?
                                        where Id=?`,
                                        [sheet.start_date.split('T')[0],
                                         sheet.end_date.split('T')[0],
                                         sheet.sheet_name,
                                         sheet.id],callback);
                       }
};

exports.sheetOperation=sheetOperation;