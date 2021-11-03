const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 2), (err) =>
    err ? console.error(err) : console.info(`-fs.write- Data written to ${destination}`)
  );
};

const readAndAppend = (content, file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const readAndDelete = (id, file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      modifiedData = parsedData.filter(note => id !== note.id);

      // parsedData.push(content);
      writeToFile(file, modifiedData);
    }
  });
};

module.exports = {
  readFromFile,
  writeToFile,
  readAndAppend,
  readAndDelete,
};
