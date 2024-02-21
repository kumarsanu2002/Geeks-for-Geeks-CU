import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};

export const getInfoById = (req,res) =>{

  const id = req.params.id;
  User.findById(id)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Not found user with id" + id });
    } else {
      const { _id, name, email } = data;
      res.status(200).json({ success: true, user: { _id, name, email } });
    }
  })
  .catch(err => {
    res
    .status(500)
    .send({message: "Error retrieving user with id" + id});
  });

}

export const getAll = (req,res) =>{
  User.find()
  .then(data => {
    const users = data.map(user => {
      const { _id, name, email } = user;
      return { _id, name, email };
    });
    res.status(200).json({ success: true, users });
  })
  .catch(err => {
    res
    .status(500)
    .send({message: err.message || "Error retrieving users"});
  });
}