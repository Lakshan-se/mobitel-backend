import User from '../models/Login.js';

export const login = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Find user by username and role
        const user = await User.findOne({ username, role });
        if (!user) return res.status(400).json({ message: 'Invalid username or role' });

        // Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        // Login success
        res.status(200).json({ message: 'Login successful', role });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const newUser = new User({ username, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
