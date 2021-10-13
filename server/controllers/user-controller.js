const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },

//register
  async register({ body }, res) {
    const existingUser = await User.findOne({ email: body.email });
    
    if (existingUser)
      return res.status(400).json({
        errorMessage: "There is an existing account associated with this email address."
      });

    const newUser = await User.create(body);

    if (!newUser) {
      return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(newUser);
      res.json({ token, newUser });
  },

//login
  async login({ body }, res) {
    const user = await User.findOne({ email: body.email });

    if(!user) {
      return res.status(410).json({ errorMessage: "Incorrect username or email" });
    }
    
    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(401).json({ message: "Incorrect username or email" });
    }

    const token = signToken(user);
    res.json({ token, user });
  },
  
//logout
  logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    }).send();
  },

  async loggedin(req, res) {
    let token = req.cookies.token;
    console.log(token);

    if (!token) return res.json(false);

    jwt.verify(token, "shutitupyou");

    res.send(true);
  },

  async saveMed({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { medlist: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteMed({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { medlist: { name: params.medicineName } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
}
