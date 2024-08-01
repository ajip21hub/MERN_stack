const mongoose = require("mongoose")

const MailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  });

  MailSchema.index({email:1}, {unique:true});
  
  module.exports = mongoose.model('Mail', MailSchema);
