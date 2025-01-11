import Report from "../models/report.js";

export const saveReport = async (req, res) => {
  try {
    const { month, selectEmployee, reportDate } = req.body;

    // Validate required fields
    if (!month || !reportDate) {
      return res.status(400).json({ message: "Month and reportDate are required." });
    }

    // Create a new report instance
    const newReport = new Report({
      month,
      selectEmployee,
      reportDate,
    });

    // Save the report to the database
    const savedReport = await newReport.save();

    // Respond with success
    res.status(201).json({
      message: "Report saved successfully!",
      data: savedReport,
    });
  } catch (error) {
    console.error("Error saving report:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
// GET a single report by ID
export const getReportById = async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch the report by its ID
    const report = await Report.findById(id);

    // If report is not found
    if (!report) {
      return res.status(404).json({ message: "Report not found." });
    }

    // Respond with the found report
    res.status(200).json({
      message: "Report fetched successfully!",
      data: report,
    });
  } catch (error) {
    console.error("Error fetching report:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
// GET all reports
export const getReports = async (req, res) => {
    try {
      // Fetch all reports from the database
      const reports = await Report.find();
  
      // If no reports are found
      if (reports.length === 0) {
        return res.status(404).json({ message: "No reports found." });
      }
  
      // Respond with the reports
      res.status(200).json({
        message: "Reports fetched successfully!",
        data: reports,
      });
    } catch (error) {
      console.error("Error fetching reports:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
