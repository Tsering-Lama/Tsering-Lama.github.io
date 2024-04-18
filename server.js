const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock user data (replace with database queries in a real application)
const users = [
  { id: 1, username: 'john_doe', email: 'john@example.com', password: 'password1' }, // hashed password: "password123"
  { id: 2, username: 'jane_smith', email: 'jane@example.com', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username or email
  const user = users.find(u => u.username === username || u.email === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username/email or password.' });
  }

  // Verify password
  if (!passwordMatches(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username/email or password.' });
  }

  // Authentication successful
  res.json({ message: 'Login successful', user });
});

// Helper function to verify password (replace with your actual password hashing mechanism)
function passwordMatches(plainPassword, hashedPassword) {
  // Replace this with your actual password hashing mechanism (e.g., bcrypt)
  // For demonstration purposes, we're using a simple comparison here
  return plainPassword === 'password123'; // Replace 'password123' with the actual password
}

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
