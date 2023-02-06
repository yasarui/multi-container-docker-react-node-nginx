const express = require('express');
const axios = require('axios');
//Init app
const app = express();
const port = process.env.PORT || 5000;

app.get('/posts', async (req,res) => {
   const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
   return res.status(200).send(data.data.slice(0,9));
});

app.get('/todos', async (req,res) => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.status(200).send(data.data.slice(0,9));
});

app.get('/', (req,res)=>{
  res.status(200).send("Hello World Yasar Arafat");
});

app.listen(port, ()=>{
   console.log(`Server is up and running on port ${port}`)
});