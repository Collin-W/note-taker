const router = require('express').Router();
const fs = require('fs');
const { request } = require('http');
const path = require('path');
const { notesArray } = require("../Develop/db/db.json");
// const {
//     createNewNote
// } = require('../Develop/lib/lib.js')



//GET route to read the db.json file and return saved notes
router.get('/notes', (req, res) => {

    let results = JSON.parse(fs.readFileSync(path.join(__dirname, "../Develop/db/db.json")));
    res.json(results)
    console.log(res.json(results))
});


router.post('/notes', (req, res) => { 
    const note = req.body;

    notesArray.push(note);

    console.log(notesArray.push(note))
})


// Post route should receive a new note and save on request body adding to db.json file
// each note needs a new id when saved check the npm packages
// router.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();

//     //validate note??
//     // if (!req.body) {
//     //     res.status(400).send('The note is not properly formatted.');
//     // } else {
//     const newNote = createNewNote(req.body, notes);
//     res.json(newNote);
//     // }
// });


// router.post('/notes', (req, res) => {

//   let newNote = JSON.stringify( req.body )
//   console.log(newNote)
//   let noteArray = fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"));
//   console.log(noteArray);
//   noteArray.push(newNote);


  

//     // console.log(req.body)
//     // console.log(res.json((req.body)))
//    //const result = res.json((req.body))

// })



// router.post('/notes', (req, res) => {
//            // req.body.id = notes.length.toString();
//             const newNote = createNewNote(req.body, notes);


//             function createNewNote(body, notesArray) {
               

                
//                 fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'),
//                 JSON.stringify({ notesArray }, null, 2)
//   );
//                    // JSON.stringify({ notesArray })
//                 );
// //                 return note;
//             }

            
//             res.json(note);
//             console.log("🚀" , res.json(newNote))

//         });

module.exports = router;