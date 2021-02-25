const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Open Note Taker in html landing page with a link to notes page ... GET * opens index.html

//click link opens html with existing notes in left column, plus empty to enter new title and notes in right ... GET /notes opens notes.html

        //when text entered, save button shows up

        //on save, new note added to left column   .... POST /api/notes gets new note and add it to the db.json  each note will need a unique id

//clicking existing note opens it in the right side ... GET/api/notes reads db.json


//clicking write icon in nav goes back to able to make new note

//bonus: DELETE /api/noes/:id gets param to read db.json and remove the note with the correct id 

