const api = require("express").Router();
const uuid = require("../helpers/uuid");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const notesRouter = require("./notes");


// /api/notes
// api.use('/notes', notesRouter)

// api/comments
// api.use('/comments', commentsRouter)

api.get("/notes", (req, res) => {
    // console.info("-Console Log- indexRoutes_get j.p: " + req);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/notes", (req, res) => {
  console.info(`-Console Log- notes.post: ${req}`);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      noteId: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`new note added!`);
  } else {
    res.error(`Error adding note`);
  }
});

module.exports = api;
