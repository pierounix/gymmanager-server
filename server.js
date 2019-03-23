
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

const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs'); 
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));


app.post('/api/login/', (req, res) => {
  const  sentPassword  =  req.body.password;
  memberController.memberOperation.getMemberByEmail(req.body.email, function(err,usr) {
    if(err) { res.status(500).send(err); }
    const user = usr[0];
    if (!user) return  res.status(404).send('Utente non trovato!');
    const  result  =  bcrypt.compareSync(sentPassword, user.password);
    if(!result) return  res.status(401).send('Password non valida!');
    const  expiresIn  =  24  *  60  *  60;
    const  accessToken  =  jwt.sign({ id:  user.id }, 'zipiezz', {
                                      expiresIn:  expiresIn
                                      });
    res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});
  });
});

app.post('/api/register', (req, res) => {
  var memberId;
  req.body.password = bcrypt.hashSync(req.body.password);
  memberController.memberOperation.getMemberByEmail(req.body.email, function(err,rows) {
    if(err) { res.status(404).send(err); }
    else {
      // Check if user exists
      if(rows[0] == null) {
      memberController.memberOperation.addMember(req.body, function(err,result) {
        if(err) { res.send(err); }
        else { 
            memberId=result.insertId; 
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  memberId }, 'zpiezz', {
                                              expiresIn:  129600
                                              });
            res.status(200).send({  "user":  memberId, 
                                    "access_token":  accessToken, 
                                    "expires_in":  expiresIn          
                                 });
            }
          });
        }
        // The user already exists
        else {
          res.send('Utente già esistente');
        }
      }
    });
});

// Verify JWT Token 
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['access_token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'zipiezz', function(err, decoded) {       if (err) {console.log(err);
        return res.json({ success: false, message: 'Failed to authenticate token.' });       } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;         next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});


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