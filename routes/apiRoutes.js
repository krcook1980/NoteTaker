//api routes
const { v4: uuidv4 } = require('uuid');
let currArr = require('../db/db.json')
const fs = require('fs');

module.exports = (app) => {
app.post('/api/notes', function(req, res) {
    const newNote = req.body;
    newNote.id = uuidv4();
    
    currArr.push(newNote)
    res.json(true);
    //push info into db.json
    
    
      fs.writeFileSync('./db/db.json', JSON.stringify(currArr,null,2), function(err){
        if (err) throw err;
        console.log("db updated");
      })
    });
  
  
  app.get('/api/notes/', function(req, res){
   
    res.json(currArr);
    
  });

  app.delete('/api/notes/:id', function(req,res){
 
    currArr = currArr.filter(({id}) => id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(currArr,null,2), function(err){
      if (err) throw err;
      console.log("db updated");
    })
    res.json(currArr);

  });

  
  app.put('/api/notes/:id', function(req, res){
    
    currArr = currArr.map((note) =>{
      if(note.id === req.params.id){
           return {
             title: req.body.title,
             text: req.body.text,
             id: note.id

           }
      }
      else{
       return note
      }

      
    })
    fs.writeFileSync('./db/db.json', JSON.stringify(currArr,null,2), function(err){
      if (err) throw err;
      console.log("db updated");
    })
    res.json(currArr);
  })
  
}
