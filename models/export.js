import mongoose from "mongoose";

const exportSchema = mongoose.Schema({
  Date: {
    type: Date,
    required: true,
    unique: true,
  },
  

});
const Export = mongoose.model("exportReports", exportSchema);
export default Export;
