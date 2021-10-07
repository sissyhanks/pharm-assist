const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pharm-assist', {
});

module.exports = mongoose.connection;
