const notes = require("express").Router();
const uuid = require('../helpers/uuid')
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
// localhost:3001/api/notes/notes
notes.get("/", (req, res) => {
//   console.info("-Console Log- Routes_notes: " + JSON.stringify({req}));
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
    console.info(`-Console Log- notes.post1: ${req}`);
    console.info(`-Console Log- notes.post2: ${JSON.stringify(req.body)}`);
    console.info(`-Console Log- notes.post3: ${req.body.title}`);
    console.info(`-Console Log- notes.post4: ${req.body}`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        
        readAndAppend(newNote, './db/db.json')
        res.json(`new note added!`)
    }else {
        res.error(`Error adding note`)     
    }
})

module.exports = notes;

// Homework\11_Note-Taker\db\db.json