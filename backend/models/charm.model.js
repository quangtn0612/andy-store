const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charmSchema = new Schema({
  src: {type: String}
},{
  timestamps: true
})

const Charm = mongoose.model('Charm', charmSchema);
module.exports = Charm;