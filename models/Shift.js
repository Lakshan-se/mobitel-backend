import mongoose from "mongoose";

const shiftSchema = mongoose.Schema({
  Date: {
    type: Date,
    required: true,
   
  },
  TeamLeader: {
    type: String,
    required: true,
  },
 
  shift: {
    type: String,
    required: true,
  },
  Core: {
    type: String,
    required: true,
  },
  Transmission: {
    type: String,
    required: true,
  },
  Huawei1: {
    type: String,
    required: true,
  },
  Huwawe2: {
    type: String,
    required: true,
  },
  ZTE1: {
    type: String,
    required: true,
  },
  OnCall1: {
    type: String,
    required: true,
  },
  OnCall2: {
    type: String,
    required: true,
  },
  Report: {
    type: String,
    required: true,
  },
  ExtraWork: {
    type: String,
    required: true,
  },
  FWA: {
    type: String,
    required: true,
  },
  
  
});
const Shift = mongoose.model("shifts", shiftSchema);
export default Shift;
