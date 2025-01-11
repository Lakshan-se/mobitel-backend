// Import the Shift model
import Shift from "../models/Shift.js";

// Controller function to save a new shift
export const saveShift = async (req, res) => {
  try {
    const {
      Date,
      TeamLeader,
      shift,
      Core,
      Transmission,
      Huawei1,
      Huwawe2,
      ZTE1,
      OnCall1,
      OnCall2,
      Report,
      ExtraWork,
      FWA,
    } = req.body;

    // Validate required fields
    if (
      !Date ||
      !TeamLeader ||
      !shift ||
      !Core ||
      !Transmission ||
      !Huawei1 ||
      !Huwawe2 ||
      !ZTE1 ||
      !OnCall1 ||
      !OnCall2 ||
      !Report ||
      !ExtraWork ||
      !FWA
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new shift instance
    const newShift = new Shift({
      Date,
      TeamLeader,
      shift,
      Core,
      Transmission,
      Huawei1,
      Huwawe2,
      ZTE1,
      OnCall1,
      OnCall2,
      Report,
      ExtraWork,
      FWA,
    });

    // Save the shift to the database
    const savedShift = await newShift.save();

    // Respond with success
    res.status(201).json({
      message: "Shift saved successfully!",
      data: savedShift,
    });
  } catch (error) {
    console.error("Error saving shift:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
export const getShifts = async (req, res) => {
  try {
    // Retrieve all shifts from the database
    const shifts = await Shift.find();

    // Check if any shifts exist
    if (!shifts || shifts.length === 0) {
      return res.status(404).json({ message: "No shifts found." });
    }

    // Respond with the list of shifts
    res.status(200).json({
      message: "Shifts retrieved successfully!",
      data: shifts,
    });
  } catch (error) {
    console.error("Error retrieving shifts:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};