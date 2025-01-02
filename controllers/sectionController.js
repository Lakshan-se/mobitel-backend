import Section from '../models/Section.js';

// Add a new section
export const addSection = async (req, res) => {
    const { name } = req.body;

    try {
        // Check if the section already exists
        const existingSection = await Section.findOne({ name });
        if (existingSection) {
            return res.status(400).json({ message: 'Section already exists' });
        }

        // Create a new section
        const newSection = new Section({ name });
        await newSection.save();

        res.status(201).json({ message: 'Section added successfully', section: newSection });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
