const router = require('express').Router();

const { notes } = require('../Develop/db/db.json')




//GET route to read the db.json file and return saved notes


// Post route should recive a new note and save on request body adding to db.json file
// each note needs a new id when saved check the npm packages