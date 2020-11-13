const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  userId: {type: String, required: true},
  slug: {type: String, required: true, unique: true, sparse: true},
  title: {type: String, required: true},
  subTitle: {type: String, required: true},
  story: {type: String, required: true},
  createdAt: {type: Date, required: true},
  updatedAt: {type: Date, required: true},
  status: {type: String, default: 'draft'},
  author: {type: String, required: true}
});

module.exports = mongoose.model('Blog', blogSchema);