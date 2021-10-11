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

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      }).send();
  },

  async login({ body }, res) {
    const user = await User.findOne({ email: body.email });

    if(!user) {
      return res.status(410).json({ errorMessage: "Incorrect username or email" });
    }
    
    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(401).json({ message: "Incorrect username or email" });
    }

        const token = jwt.sign(
      {
        user: user._id,
      },
      "shutitupyou"
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      }).send();
  },
  
  logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    }).send();
  }
}









