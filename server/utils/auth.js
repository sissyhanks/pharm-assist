const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (req, res, next) {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    try {
      const verified = jwt.verify(token, secret);
      req.user = verified.user;
            const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch (err) {
      console.error(err);
      res.status(401).json({ errorMessage: "Unauthorized" });
    }

    next();
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
