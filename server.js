
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//start server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}/`));

//html routes

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    console.log("I work")
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
  console.log("I work")
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

//api routes

app.post('/api/tasks', function(req, res) {
    let newTask = req.body
    tasksArr.push(newTask)
    console.log(tasksArr)
  });


