const { Schema, model } = require('mongoose');
const medicineSchema = require('./medicine');
const bcrypt = require('bcrypt');

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
    username: {
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
    medList: [medicineSchema],
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
  );

UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// medicineSchema.virtual('medCount').get(function () {
//   return this.medList.length;
// });

const User = model('User', UserSchema);

module.exports = User;
