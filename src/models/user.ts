import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: false,
  },
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  type: String,
  roles: String,
  isOauth: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
