// import user model
const jwt = require("jsonwebtoken");
const { User } = require('../models');

module.exports = {
  async register({ body }, res) {
      const existingUser = await User.findOne({ email: body.email });
      if (existingUser)
        return res.status(400).json({
          errorMessage: "There is an existing account associated with this email address."
        });
    

    const newUser = await User.create(body);

    const token = jwt.sign(
      {
        user: newUser._id,
      },
      "shutitupyou"
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  },
}









