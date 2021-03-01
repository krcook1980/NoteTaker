
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const currArr = require('./db/db.json')
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//start server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}/`));

//html routes

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
 
});

//api routes

app.post('/api/notes', function(req, res) {
  currArr.push(req.body);
  res.json(true);
  //push info into db.json
  
  
  });


app.get('/api/notes', function(req, res){
 
  res.json(currArr);
  
});


