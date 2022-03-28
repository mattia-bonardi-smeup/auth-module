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
  roles: [String],
  isOauth: {
    type: Boolean,
    default: false,
  },
  address: {
    street: String,
    city: String,
    country: String,
    cap: Number,
  },
  phone: {
    prefix: String,
    number: String,
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  picture: String,
});

export const userModel = mongoose.model("Users", userSchema);
