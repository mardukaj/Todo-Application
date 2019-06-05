const mongoose = require("mongoose");
const config = require('config');
const db = config.get('db');
mongoose.connect(db, { useNewUrlParser: true });
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String,
  insertDate: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
