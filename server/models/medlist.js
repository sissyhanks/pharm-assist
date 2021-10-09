const { Schema, model } = require('mongoose');

const medlistSchema = new Schema(
  {
    medicine: {
      type: String
    },
    dosage: {
      type: String
    },
    schedule: {
      type: String
    },
  }
);

const medlist = model('medlist', medlistSchema)

module.exports = medlistSchema, medlist;
