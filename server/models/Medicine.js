const { Schema, model } = require('mongoose');

const medicineSchema = new Schema(
  {
    name: {
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

const medicine = model('medicine', medicineSchema)

module.exports = medicineSchema, medicine;
