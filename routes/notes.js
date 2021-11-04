// const api = require("express").Router();
// const notes = require("express").Router();
// const uuid = require("../helpers/uuid");
// const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
// notes.get("/", (req, res) => {
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
// });

// notes.post("/", (req, res) => {
//   console.info(`-Console Log- notes.post1: ${req}`);
//   console.info(`-Console Log- notes.post2: ${JSON.stringify(req.body)}`);
//   console.info(`-Console Log- notes.post3: ${req.body.title}`);
//   console.info(`-Console Log- notes.post4: ${req.body}`);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       id: uuid(),
//     };

//     readAndAppend(newNote, "./db/db.json");
//     res.json(`new note added!`);
//   } else {
//     res.error(`Error adding note`);
//   }
// });

// api.delete("/notes/:id", (req, res) => {
//   console.log(`-Console Log- app.delete:  ${req.method}`);

//   const { id } = req.params;
//   console.log("-Console Log api.del_id -" + id);

//   if (id) {
//     readAndDelete(id, "./db/db.json");
//     res.json(`note deleted!`);
//   } else {
//     res.error(`Error deleting note`);
//   }
// });

// module.exports = notes;
