const { Schema } = require('mongoose');

const medicineSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    morning: {
      type: Boolean
    },
    afternoon: {
      type: Boolean
    },
    evening: {
      type: Boolean
    },
    night: {
      type: Boolean
    },
    as_needed: {
      type: Boolean
    }
  }
);



module.exports = medicineSchema;
