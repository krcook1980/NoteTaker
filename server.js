const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3001;
const app = express();
const tasksArr = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
saveBtn();

//Open Note Taker in html landing page with a link to notes page ... GET * opens index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log()
});
//click link opens html with existing notes in left column, plus empty to enter new title and notes in right ... GET /notes opens notes.html

        //when text entered, save button shows up
function saveBtn(){
    if(formContent !== null){
        $(".navbar").append(`<button class="btn btn-outline-success my-2 my-sm-0 save" type="submit">Save</button>`)
    };
};
        //on save, new note added to left column   .... POST /api/notes gets new note and add it to the db.json  each note will need a unique id
app.post('/api/tasks', function(req, res) {
    let newTask = req.body
    tasksArr.push(newTask)
    console.log(tasksArr)
})
//clicking existing note opens it in the right side ... GET/api/notes reads db.json


//clicking write icon in nav goes back to able to make new note

//bonus: DELETE /api/noes/:id gets param to read db.json and remove the note with the correct id 

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}/`));