const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
    medList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'medlist'
      }
    ]
  }
);

const User = model('user', UserSchema);

module.exports = User;
