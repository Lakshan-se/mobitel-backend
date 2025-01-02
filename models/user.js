import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  type: {
    required: true,
    type: String,

  }

});
const User = mongoose.model("users", userSchema);
export default User;
