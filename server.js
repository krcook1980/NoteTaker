
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const taskArr = [];


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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

//api routes

app.post('/api/notes', function(req, res) {
  const newTask = JSON.stringify(req.body);
  console.log(newTask)
  taskArr.push(newTask);
  fs.writeFileSync('./db/db.json', `[${taskArr}]`)
  });

app.get('/api/notes', function(req, res){
 
  res.json(taskArr);
  
});


