const { Schema, model } = require('mongoose');

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
    dosage:{
        type: String
    }
  }
);

const medlist = model('medlist', medlistSchema);

module.exports = medlist;
