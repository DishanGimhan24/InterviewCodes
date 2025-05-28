
const express = require('express');
const app = express();

//craete user

app.post('/post', (request, response) => {

  const body = request.body;

  return body;
});

// GET Aall user
app.get('/getall', (request, response) => {
  
  const params = request.params;

  return response.json(params);
});