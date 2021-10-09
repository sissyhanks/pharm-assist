const { Schema } = require('mongoose');

const medlistSchema = new Schema(
  {
    user:
      [
        {
          type: Schema.Types.ObjectId,
          ref: 'user'
        }
      ],
    medicine: {
      type: String
    },
    dosage: {
      type: String
    },
    schedule: {
      type: String
    },
    image: {
      type: String
    }
  }
);


module.exports = medlistSchema;
