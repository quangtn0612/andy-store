const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportSchema = new Schema({
  src: {type: String}
},{
  timestamps: true
})

const Passport = mongoose.model('Passport', passportSchema);
module.exports = Passport;