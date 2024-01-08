import jwt from "jsonwebtoken";

const secret = 'sfhoghohdfd'
export const sendCookie = (user, res, message, statusCode = 200) => {
  //assigning cookie
  const token = jwt.sign({ _id: user._id },secret);
  //`process.env.JWT_SECRET`
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      // sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      // secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};
