var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(bodyParser.urlencoded({ extended:true }));

// Define MongoDB connection URI and options
const mongoURI = 'mongodb://127.0.0.1:27017/course_portal_db';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  role: String
});

// Course schema
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    methodOfMeeting: String,
    meetingDaysAndTime: String
});

const Course = mongoose.model('Course', courseSchema);

app.use(bodyParser.json());

// POST route for enrolling in a course
app.post('/enroll', (req, res) => {
    const courseName = req.body.courseName;
    // Save enrollment data to MongoDB
    const course = new Course({
        name: courseName
    });
    course.save((err) => {
        if (err) {
            console.error('Error enrolling in course:', err);
            res.status(500).send('Error enrolling in course');
        } else {
            console.log('Enrolled in course:', courseName);
            res.status(200).send('Enrolled in course');
        }
    });
});

// Define the model for the user collection
const User = mongoose.model('User', userSchema);
  
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
});

const path = require("path");

// Define route for the login page
app.get("/login", (req, res) => {
    // Send the login page HTML file
    res.sendFile(path.join(__dirname, "public/login.html"));
});



app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;

    // Create a new user document
    const newUser = new User({
        "name": name,
        "email": email,
        "username": username,
        "password": password,
        "role": role
    });

    // Save the new user document to the database
    newUser.save()
        .then(() => {

            // If registration is successful, redirect to the login page with a success message
            const successMessage = "Registration successful. Please login to continue.";
            res.redirect(`/login?message=${encodeURIComponent(successMessage)}`);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error inserting record");
        });
});
// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Find user by username and password
    const user = await User.findOne({ username, password });
  
    if (user) {
      // If login is successful, redirect to the user's account page with a welcome message
      const welcomeMessage = `Hello, ${username}!`;
      res.redirect(`/account?message=${encodeURIComponent(welcomeMessage)}`);
    } else {
      res.status(401).send('Invalid username or password');
    }
  });

  // Logout route
app.post('/logout', (req, res) => {
    // Perform logout actions, such as clearing session or token
    // Redirect the user to the main page
    res.redirect('/register');
});

  
// Serve account.html file
app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/public/account.html');
  });

app.listen(3005, () => {
    console.log("Listening on PORT 3005");
});
