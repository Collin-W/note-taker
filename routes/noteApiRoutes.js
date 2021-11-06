const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//GET route to read the db.json file and return saved notes
router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync(path.join(__dirname, "../Develop/db/db.json")));
    
    res.json(results)
});

// Post route should receive a new note and save on request body adding to db.json file
// each note needs a new id when saved check the npm packages
router.post('/notes', (req, res) => {
    const note = req.body;
    //let notes = notesArray
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../Develop/db/db.json")));

    note.id = notes.length

    notes.push(note);

    fs.writeFileSync(path.join(__dirname, "../Develop/db/db.json"), JSON.stringify(notes, null, 2))

    res.json();
});

router.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../Develop/db/db.json")));

    let index = req.params.id;

    notes.splice(index, 1);

    notes.forEach(ele => {
        ele.id = notes.indexOf(ele)

        fs.writeFileSync(path.join(__dirname, "../Develop/db/db.json"), JSON.stringify(notes, null, 2))

        res.json();
    });
});

module.exports = router;