import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  Date: {
    type: Date,
    required: true,
   
  },
  mealTimes: {
    type: String,
    required: true,
  },
 
  amount: {
    type: Number,
    required: true,
  },
  amountPerPerson: {
    type: Number,
    required: true,
  },

});
const food = mongoose.model("foods", foodSchema);
export default food;
