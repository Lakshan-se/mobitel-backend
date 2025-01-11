import Registration from "../models/registration.js";

// Function to save registration data
export const saveRegistration = async (req, res) => {
  const { userType, userName, password, confirmPassword } = req.body;

  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Create a new registration instance
    const newRegistration = new Registration({
      userType,
      userName,
      password, // In a real-world scenario, you should hash the password before saving
      confirmPassword,
    });

    // Save the registration data to the database
    const savedRegistration = await newRegistration.save();

    // Respond with the saved data
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET all registrations
export const getRegistrations = async (req, res) => {
    try {
      // Fetch all documents from the "resetForms" collection
      const registrations = await Registration.find();
      
      // Respond with the fetched data
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };