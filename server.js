
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const memberController = require('./controller/member-controller');
const sheetController = require('./controller/sheet-controller');
const iconController = require('./controller/icon-controller');
const exerciseController = require('./controller/exercise-controller');
const sheetexerciseController = require('./controller/sheetexercise-controller');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));


app.get('/api/members/', function (req, res) {   
  memberController.memberOperation.getAllMembers(function(err,rows) {
      if(err) { res.json(err);}
      else{res.json(rows);}
      });
  });

  app.get('/api/members/:id', function (req, res) {
    memberController.memberOperation.getMemberById(req.params.id,function(err,rows) {
        if(err) { res.json(err); }
        else { res.json(rows[0]); }
      });
  });

  app.get('/api/members/search/:search', function (req, res) {
    memberController.memberOperation.getMemberBySearch(req.params.search,function(err,rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
      });
  });

  app.put('/api/members/:id',function(req,res,next){
    memberController.memberOperation.updateMember(req.params.id,req.body,function(err,rows){
      if(err) { res.json(err); }
        else { res.json(rows); }
        });
    });
  

  app.get('/api/sheets/:id', function (req, res) {
    sheetController.sheetOperation.getSheetById(req.params.id,function(err,rows) {
          if(err) { res.json(err); }
          else { res.json(rows[0]); }
        });
    });

  app.post('/api/sheets',function(req,res,next){
    sheetController.sheetOperation.addSheet(req.body,function(err,count){
      if(err) { res.json(err); }
      else { res.json(req.body); }
    });
  });

  app.put('/api/sheets/',function(req,res){
    sheetController.sheetOperation.updateSheet(req.body,function(err){
      if(err) {res.json(err);}
      else{res.json(req.body);}
    });
  });
  

  app.get('/api/exercises/:id', function (req, res) {
    exerciseController.exerciseOperation.getExerciseById(req.params.id,function(err,rows) {
      if(err) { res.json(err); }
      else { res.json(rows[0]); }
    });
  });

  app.post('/api/exercises/', function (req, res) {
      exerciseController.exerciseOperation.addExercise(req.body,function(err,rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
    });
  });

  app.put('/api/exercises/', function (req, res) {
    exerciseController.exerciseOperation.updateExercise(req.body,function(err,rows) {
      if(err) { res.json(err); }
      else { res.json(rows); }
  });
});
    
  app.delete('/api/exercises/:id', function (req, res) {
      exerciseController.exerciseOperation.removeExercise(req.params.id,function(err,rows) {
      if(err) { res.json(err); }
      else { res.json(rows); }
    });
  });

    
  app.get('/api/exercises/muscle/:muscle', function (req, res) {
      exerciseController.exerciseOperation.getExerciseByMuscle(req.params.muscle,function(err,rows) {
        if(err) { res.json(err); }
        else { res.json(rows); }
      });
    });

  app.get('/api/icons/', function (req, res) {
    iconController.iconOperation.getAllIcons(function(err,rows) {
      if(err) { res.json(err); }
      else { res.json(rows); }
    });
  });

    app.get('/api/sheetexercises/:id_sheet', function (req, res) {
        sheetexerciseController.sheetexerciseOperation.getSheetExercises(req.params.id_sheet,function(err,rows) {
          if(err) { res.json(err); }
          else { res.json(rows);}
        });
      });
    
      app.get('/api/sheetexercises/:id_sheet/:day', function (req, res) {
        sheetexerciseController.sheetexerciseOperation.getSheetExerciseByDay(req.params.id_sheet,req.params.day,function(err,rows) {
          if(err) { res.json(err); }
          else { res.json(rows); }
        });
      });
  
      app.post('/api/sheetexercises/', function (req, res) {
          sheetexerciseController.sheetexerciseOperation.addSheetExercise(req.body,function(err,rows) {
            if(err) { res.json(err); }
            else { res.json(rows);}
          });
        });
      
      app.delete('/api/sheetexercises/:id_sheet', function (req, res) {
        sheetexerciseController.sheetexerciseOperation.removeSheetExerciseBySheet(req.params.id_sheet,function(err,rows) {
            if(err) { res.json(err); }
            else { res.json(rows);}
          });
        });

app.listen(8000, () =>{
  console.log('Server started on port 8000');
});