const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
exports.resetPasswordToken = async function (req, res) {
  try {
    // get the email
    const { email } = req.body;
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User is not registered",
      });
    }
    // Now generating the token
    const token = crypto.randomUUID();
    //updating the user details attaching token and expiry time
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { token, resetPasswordExpires: Date.now() + 5 * 60 * 1000 },
      { new: true },
    );
    // now Sending the mail
    const url = `http://localhost:5173/update-password/${token}`;

    await mailSender(
      email,
      "Password reset link",
      `Password reset link: ${url}`,
    );

    // returning the response
    return res.status(200).json({
      success: true,
      message:
        "Email sent successfully, please check the mail and change the password",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while sending password reset mail",
    });
  }
};

exports.resetPassword = async function (req, res) {
  try {
    // get user details
    const { password, confirmPassword, token } = req.body;
    // validation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password must match",
      });
    }
    // fetching user from token
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Token is invalid",
      });
    }

    // checking if token is expired
    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Token expired",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // update the password
    await User.findOneAndUpdate(
      { token },
      { password: hashedPassword },
      { new: true },
    );
    // sending the response
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while reseting the password",
    });
  }
};
