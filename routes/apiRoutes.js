//api routes
const { v4: uuidv4 } = require('uuid');
const currArr = require('../db/db.json')
const fs = require('fs');

module.exports = (app) => {
app.post('/api/notes', function(req, res) {
    const newNote = req.body;
    newNote.id = uuidv4();
    
    currArr.push(newNote)
    res.json(true);
    //push info into db.json
    
    
      fs.writeFileSync('./db/db.json', JSON.stringify(currArr), function(err){
        if (err) throw err;
        console.log("db updated");
      })
    });
  
  
  app.get('/api/notes/', function(req, res){
   
    res.json(currArr);
    
  });

  
}
