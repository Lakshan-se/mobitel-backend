import UploadEmployee from "../models/uploadEmployee.js";

export const saveEmployee = async (req, res) => {
  try {
    const {
      employeeNumber,
      callName,
      fullName,
      designation,
      service,
      level,
      category,
      joinDate,
      nicNumber,
      vehicalNumber,
      address,
      homeTeli,
      tShirt,
      mobileNumber,
      eMail,
      status,
    } = req.body;

    // Create a new employee without validation
    const newEmployee = new UploadEmployee({
      employeeNumber,
      callName,
      fullName,
      designation,
      service,
      level,
      category,
      joinDate,
      nicNumber,
      vehicalNumber,
      address,
      homeTeli,
      tShirt,
      mobileNumber,
      eMail,
      status,
    });

    // Save the employee to the database
    const savedEmployee = await newEmployee.save();

    // Respond with success
    res.status(201).json({
      message: "Employee saved successfully!",
      data: savedEmployee,
    });
  } catch (error) {
    console.error("Error saving employee:", error);

    // Handle duplicate employeeNumber error
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Employee with this number already exists." });
    }

    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller function to get all employees
export const getEmployees = async (req, res) => {
  try {
    // Fetch all employees from the database
    const employees = await UploadEmployee.find();

    // Respond with the list of employees
    res.status(200).json({
      message: "Employees retrieved successfully!",
      data: employees,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
