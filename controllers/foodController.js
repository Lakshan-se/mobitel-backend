import Food from "../models/food.js";

export const saveFood = async (req, res) => {
  try {
    // Extract data from the request body
    const { Date, mealTimes, amount, amountPerPerson } = req.body;

    // Validate required fields
    if (!Date || !mealTimes || !amount || !amountPerPerson) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new food entry
    const newFood = new Food({
      Date,
      mealTimes,
      amount,
      amountPerPerson,
    });

    // Save the food entry to the database
    const savedFood = await newFood.save();

    // Respond with the saved food entry
    res.status(201).json({
      message: "Food entry saved successfully!",
      data: savedFood,
    });
  } catch (error) {
    console.error("Error saving food entry:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller function to get all food entries
export const getFoods = async (req, res) => {
  try {
    // Fetch all food entries from the database
    const foods = await Food.find();

    // Respond with the list of food entries
    res.status(200).json({
      message: "Food entries retrieved successfully!",
      data: foods,
    });
  } catch (error) {
    console.error("Error retrieving food entries:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
