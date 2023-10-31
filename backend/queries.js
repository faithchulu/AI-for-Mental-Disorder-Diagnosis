// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const express = require('express');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mental',
  password: 'Chimwemwe',
  port: 5432, 
})


/// get all user
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log(results.rows);
    })
  }

///////////-----------------------> userResponse table

  //-----------------------> get all responses
  const getResponses = (request, response) => {
    pool.query('SELECT * FROM userResponses ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////////-----------------> get response by id
  const  getResponseById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM userResponses WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  /////------------------>create Response
  const createResponse = (request, response) => {
    const {option_id,question_id, answer } = request.body
  
    pool.query('INSERT INTO userResponses (option_id,question_id, answer ) VALUES ($1,$2, $3) RETURNING *',
     [ userId, questionId, response ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(202).send(`Answer added with ID: ${results.rows[0].id}`)
    })
  }
  ////////////////////------------------------> update Response
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
  ////////////----------------> delete Response
  const deleteAnswer = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM answers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
     }
      response.status(200).send(`Answer deleted with ID: ${id}`)
    })
  }
  


//Exporting
module.exports = {
    getUsers,
}