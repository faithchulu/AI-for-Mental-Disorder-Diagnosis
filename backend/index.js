const express = require('express');
const PORT = 5000;
const bodyParser = require('body-parser')
const cors = require('cors');
const DB = require('./queries');
const bcrypt = require('bcrypt');
const Pool = require('pg').Pool
const jwt = require('jsonwebtoken');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mental',
    password: 'Chimwemwe',
    port: 5432,
  })

pool.connect().then(()=>{
    console.log('database connected  successfully!')
})

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy 
app.use(cors());


app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
})

////////////////////////////////////////////////////////////////////////////////////////////
// BEGIN AUTH

app.use(cors());
app.use(bodyParser.json());

///----> user registration middleware
function validateUserData(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  next();
}


app.post('/register', validateUserData, async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users ( email, password) VALUES ($1, $2)';
    const values = [email, hashedPassword];

    await pool.query(query, values);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error while registering user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Get user from the database
      const query = 'SELECT * FROM users WHERE email = $1';
      const result = await pool.query(query, [email]);
      const user = result.rows[0];
  
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
  
      // Create a JWT token with the user ID and a secret key
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging in.' });
    }
  });
  
  // Protected route
  app.get('/protected', (req, res) => {
    // Extract the token from the request headers
    const token = req.headers.authorization.split(' ')[1];
  
    try {
      // Verify the token using the secret key
      const decodedToken = jwt.verify(token, 'your-secret-key');
      const userId = decodedToken.userId;
  
      // You can now use the userId to fetch user-specific data from the database
      // and respond with the appropriate information.
  
      res.status(200).json({ message: 'This is a protected route.' });
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized. Invalid token.' });
    }
  });

//END AUTH 
///////////////////////////////////////////////////////////////////////////////////////////////////

// STORE RESPONSES
app.post('/userresponses', async (req, res) => {
  try {
    // Get the user responses data from the request body
    const { responseArray } = req.body;

    if (!responseArray || !Array.isArray(responseArray)) {
      return res.status(400).json({ error: 'Invalid user responses data.' });
    }

    // Insert the user responses array into the PostgreSQL table
    const query = 'INSERT INTO userresponses (responseArray) VALUES ($1) RETURNING responseID';
    const values = [responseArray];

    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      const responseID = result.rows[0].responseID;
      res.status(201).json({ message: 'User responses stored successfully', responseID });
    } else {
      res.status(500).json({ error: 'Failed to store user responses.' });
    }
  } catch (error) {
    console.error('Error while storing user responses:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});


app.get('/users', DB.getUsers)