
import mongoose from "mongoose";

const uploadEmployeeSchema = mongoose.Schema({
  employeeNumber: {
    type: String,
    required: true,
   
  },
  callName: {
    type: String,
    required: true,
  },
 
  fullName: {
    required: true,
    type: String,
  },

  designation: {
    required: true,
    type: String,
  },

  service: {
    required: true,
    type: String,
  },

  level: {
    required: true,
    type: String,
  },

  category: {
    required: true,
    type: String,
  },

  joinDate: {
    required: true,
    type: Date,
  },

  nicNumber: {
    required: true,
    type: String,
  },

  vehicalNumber: {
    required: true,
    type: String,
  },

  address: {
    required: true,
    type: String,
  },

  homeTeli: {
    required: true,
    type: String,
  },

  tShirt: {
    required: true,
    type: String,
  },

  mobileNumber: {
    required: true,
    type: String,
  },

  eMail: {
    required: true,
    type: String,
  },

  status: {
    required: true,
    type: String,
  },
 
  

});
const UploadEmployee = mongoose.model("Employees", uploadEmployeeSchema);
export default UploadEmployee;
