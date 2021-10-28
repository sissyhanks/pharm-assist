const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    })

    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (err) {
    //log the error in console
    console.error(err);
    //stop the presses and exit with error >>> which is what the one indicates
    process.exit(1);
  }
}


// export { connectDB };
module.exports = connectDB;