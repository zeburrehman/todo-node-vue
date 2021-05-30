let fs = require("fs");
let util = require('util');
let path = require("path");
const Todo = require("../classes/todo");

let readFile = util.promisify(fs.readFile);
let appendFile = util.promisify(fs.appendFile);
let writeFile = util.promisify(fs.writeFile);

let filePath = path.join(__dirname, "..", "data", "todo.json");

module.exports = {
  getTodos: async () => {
    
    try {
      // let todos = await csv().fromFile();
      let response = await readFile(filePath, 'utf-8');
      let data = response && JSON.parse(response) || null;
      return data && data.map(t => new Todo(t)) || [];
    } catch (err) {
      throw err;
    }
  },
  saveTodos: async (todos) => {
    try {
      await writeFile(filePath, todos);
    } catch (err) {
      throw err;
    }
  }
}