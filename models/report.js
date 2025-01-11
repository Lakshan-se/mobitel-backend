import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  month: {
    type: Date,
    required: true,
   
  },
  selectEmployee: {
    type: String,

  },
 
  Date: {
    type: Date,
    required: true,
    default: Date.now,
  },
 
});
const Report = mongoose.model("reports", reportSchema);
export default Report;
