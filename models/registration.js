import mongoose from "mongoose";

const registrationSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
   
  },
  userName: {
    type: String,
    required: true,

  },
 
  password: {
    type: String,
    required: true,
    
  },

  confirmPassword: {
    type: String,
    required: true,
    
  },
 
});
const Registration = mongoose.model("resetForms", registrationSchema);
export default Registration;
