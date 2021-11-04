const express = require("express");
const path = require("path");
const api = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3001;

// properly parse data
app.use(express.json())
// 
app.use(express.urlencoded({extended: true}))


app.use("/api", api);
// all routes that are in api, are prefixed with /api
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
