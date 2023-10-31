const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'survey',
  password: 'Chimwemwe',
  port: 5432, 
})

/// get user
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get user by id
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create
  const createUser = (request, response) => {
    const { username,email, password, gender,age,role } = request.body
  
    pool.query
    ('INSERT INTO users (username, email,password,gender,age,role ) VALUES ($1, $2,$3,$4,$5, $6) RETURNING *', [username, email,password,gender,age,role],
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  ////////////////////------------------------> update
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email,password,gender,age,role} = request.body
  
    pool.query(
      'UPDATE users SET username = $1, email=$2, password = $3, gender= $4, age=$5, role =  $6 WHERE id = $7',
      [ username, email,password,gender,age,role, id ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  ////////////----------------> delete
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  ////// ------------------------- survey
  const getSurveys = (request, response) => {
    pool.query('SELECT * FROM surveys ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get user by id
  const  getSurveyById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM surveys WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create
  const createSurvey = (request, response) => {
    const { user_id,title, description } = request.body
  
    pool.query('INSERT INTO surveys (user_id,title, description) VALUES ($1, $3, $2) RETURNING *', [user_id,title, description], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(surveyResponse.data.id)
    })
  }
  ////////////////////------------------------> update
  const updateSurvey = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_id, title, description } = request.body
  
    pool.query(
      'UPDATE surveys SET  user_id = $1,  title = $2, description = $3 WHERE id = $4',
      [user_id, title, description, id],
      (error, results) => {
        if (error) {
          throw error
        }
        
        response.status(200).send(`Survey modified with ID: ${id}`)
    }
    )
  }
  ////////////----------------> delete
  const deleteSurvey = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM surveys WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
     }
      response.status(200).send(`Survey deleted with ID: ${id}`)
    })
  }

  ///////////////--------------->Options table
  const getOptions = (request, response) => {
    pool.query('SELECT * FROM options ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get option by id
  const  getOptionById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM options WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create
  const createOption = (request, response) => {
    const { question_id,option } = request.body
  
    pool.query('INSERT INTO options (question_id, option) VALUES ($1,$2) RETURNING *', [question_id,option], 
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Option added with ID: ${results.rows[0].id}`)
    })
  }
  ////////////////////------------------------> update
  const updateOption = (request, response) => {
    const id = parseInt(request.params.id)
    const { option, question_id } = request.body
  
    pool.query(
      'UPDATE options SET question_id = $1, option = $2 WHERE id = $3',
      [question_id,option,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Question modified with ID: ${id}`)
    }
    )
  }
  ////////////----------------> delete
  const deleteOption = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM options WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
     }
      response.status(200).send(`Option deleted with ID: ${id}`)
    })
  }

   ///////////////--------------->questions table
   const getQuestions = (request, response) => {
    pool.query('SELECT * FROM questions ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get user by id
  const  getQuestionById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM questions WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create
  const createQuestion = (request, response) => {
    const { survey_id, question, question_type } = request.body

    pool.query('INSERT INTO questions ( survey_id,question,question_type ) VALUES ($1, $2, $3) RETURNING *',
     [ survey_id, question,question_type], (error, results) => {
      if (error) {
        throw error
      }
      response.status(202).send(`question added with ID: ${results.rows[0].id}`)
    })
  }
  ////////////////////------------------------> update
  const updateQuestion = (request, response) => {
    const id = parseInt(request.params.id)
    const { survey_id,question,question_type } = request.body
  
    pool.query(
      'UPDATE questions SET survey_id = $1, question = $2 ,question_type = $3 WHERE id = $4',
      [survey_id, question,question_type, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Question modified with ID: ${id}`)
    }
    )
  }
  ////////////----------------> delete
  const deleteQuestion = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM questions WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
     }
      response.status(200).send(`Question deleted with ID: ${id}`)
    })
  }
  ///////////-----------------------> answer table

  //-----------------------//
  const getAnswers = (request, response) => {
    pool.query('SELECT * FROM answers ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get answer by id
  const  getAnswerById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM answers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create
  const createAnswer = (request, response) => {
    const {option_id,question_id, answer } = request.body
  
    pool.query('INSERT INTO answers (option_id,question_id, answer ) VALUES ($1,$2, $3) RETURNING *',
     [ option_id, question_id, answer ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(202).send(`Answer added with ID: ${results.rows[0].id}`)
    })
  }
  ////////////////////------------------------> update
  const updateAnswer = (request, response) => {
    const id = parseInt(request.params.id)
    const { option_id,question_id,answer } = request.body
  
    pool.query(
      'UPDATE answers SET option_id=$1, question_id=$2, answer = $3 WHERE id = $4',
      [option_id,question_id,answer, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Answer modified with ID: ${id}`)
    }
    )
  }
  ////////////----------------> delete
  const deleteAnswer = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM answers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
     }
      response.status(200).send(`Answer deleted with ID: ${id}`)
    })
  }
  
  
  const Register = (async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
  
      const emailExistsQuery = 'SELECT * FROM users WHERE email = $1';
      const emailExistsValues = [email];
      const emailExistsResult = await pool.query(emailExistsQuery, emailExistsValues);
      if (emailExistsResult.rowCount > 0) {
        return res.status(409).json({ error: 'Email is already registered' });
      }
  
      // Check if user already exist 
      const usernameExistsQuery = 'SELECT * FROM users WHERE username = $1';
      const usernameExistsValues = [username];
      const usernameExistsResult = await pool.query(usernameExistsQuery, usernameExistsValues);
      if (usernameExistsResult.rowCount > 0) {
        return res.status(409).json({ error: 'Username is already registered' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
      const values = [username, email, hashedPassword];
      await pool.query(query, values);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Error while registering user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  const Login = (async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid email' });
      }
  
        const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      //const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
      //res.json({ token });
  
      // Password is valid, you can generate a JWT token here and send it back to the client for authentication.
  
      res.json({ message: 'Login successful' });
    } catch (err) {
      console.error('Error while logging in:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const Logout = ((req, res) => {

    res.json({ message: 'Logout successful' });
  });



  ////////////////// exporting 
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

    getSurveys,
    getSurveyById,
    createSurvey,
    updateSurvey,
    deleteSurvey,

    getQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,

    getOptions,
    getOptionById,
    createOption,
    updateOption,
    deleteOption,

    getAnswers,
    getAnswerById,
    createAnswer,
    updateAnswer,
    deleteAnswer,
    
    Register,
    Login,
    Logout,

  }