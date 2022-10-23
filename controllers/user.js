const userModel = require("../models/user");

exports.createUser = async function (req, res) {
  const newUser = req.body;

  try {
    const existingUser = await userModel.findOne({ email: newUser.email });
    if (existingUser) {
      res.status(404).json({ succcess: false, message: "User already exist" });
    } else {
      const user = await userModel.create(newUser);
      console.log("Created User Data", user);
    }
    // console.log(existingUser);
  } catch (err) {
    console.log(err);
  }

  // console.log(newUser);
};
