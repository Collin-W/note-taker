const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNewNote } = require('../Develop/lib/lib.js')



//GET route to read the db.json file and return saved notes


router.get('/notes', (req, res) => {
    
    let results = JSON.parse(fs.readFileSync(path.join(__dirname, "../Develop/db/db.json")));
    res.json(results)
    console.log(res.json(results))
});

// Post route should recive a new note and save on request body adding to db.json file
// each note needs a new id when saved check the npm packages


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    //validate note??
    if (!req.body) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const newNote = createNewNote(req.body, notes);
        res.json(newNote);
      }
});




module.exports = router;