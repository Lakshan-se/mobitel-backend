import Export from "../models/export.js";

export const saveExport = async (req, res) => {
  try {
    // Extract data from the request body
    const { Date, description, quantity } = req.body;

    // Validate required fields
    if (!Date || !description || !quantity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new export entry
    const newExport = new Export({
      Date,
      description,
      quantity,
    });

    // Save the export entry to the database
    const savedExport = await newExport.save();

    // Respond with the saved export entry
    res.status(201).json({
      message: "Export entry saved successfully!",
      data: savedExport,
    });
  } catch (error) {
    console.error("Error saving export entry:", error);

    // Handle duplicate Date errors
    if (error.code === 11000) {
      return res.status(400).json({ message: "Export entry with this date already exists." });
    }

    res.status(500).json({ message: "Internal server error." });
  }
};
// Controller function to get all export entries
export const getExports = async (req, res) => {
  try {
    // Fetch all export entries from the database
    const exports = await Export.find();

    // Respond with the list of export entries
    res.status(200).json({
      message: "Export entries retrieved successfully!",
      data: exports,
    });
  } catch (error) {
    console.error("Error fetching export entries:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};