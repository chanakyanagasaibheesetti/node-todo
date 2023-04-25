
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// creating schema for lists

const todoSchema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
// sending mongoose data to index
const Todo = mongoose.model('Todo' , todoSchema);

module.exports = Todo;
