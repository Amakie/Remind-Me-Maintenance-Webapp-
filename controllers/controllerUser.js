// Functions for handling User Creation and Authentication
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// register function
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, timeZone } = req.body;
  
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
  
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Create a new user
        const newUser = new User({ firstname, lastname, email, password: hashedPassword, timeZone });
        await newUser.save();
  
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
  };
  
// login function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Authenticate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Create JWT token
      const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      // Respond with token
      res.json({ token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


const logoutUser = (req, res) => {
  res.json({ message: 'Logout successful' });
};

module.exports = { loginUser, registerUser, createMaintenanceData, getMaintenanceData, logoutUser};
