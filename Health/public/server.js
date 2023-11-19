const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('exp', {
  username: String,
  password: String,
});

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});


app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the username already exists in the database
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        res.json({ success: false, message: 'Username already exists' });
      } else {
        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();
  
        res.json({ success: true, message: 'Registration successful' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
 
  

  app.get('/api/items', async (req, res) => {
    try {
      const items = await User.find();
      res.json(items);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
