const api = require("express").Router();
const uuid = require("../helpers/uuid");
const { readFromFile, readAndAppend, readAndDelete } = require("../helpers/fsUtils");
const notesRouter = require("./notes");

// /api/notes
// api.use('/notes', notesRouter)

// api/comments
// api.use('/comments', commentsRouter)

api.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/notes", (req, res) => {
  //   console.info(`-Console Log- notes.post: ${req}`);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`new note added!`);
  } else {
    res.error(`Error adding note`);
  }
});

api.delete("/notes/:id", (req, res) => {
  console.log(`-Console Log- app.delete:  ${req.method}`);
//   console.log('Console Log lol' + req.params.id);


  const { title, text, id } = req.params;
    console.log('-Console Log api.del_id -' + id);

  if (id) {
    readAndDelete(id, "./db/db.json");
    res.json(`note deleted!`);
  } else {
    res.error(`Error deleting note`);
  }
});

module.exports = api;
