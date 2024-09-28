import express from 'express'; // this doesn't work, the goal is to have imports working :(
// const express = require("express"); // this works

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`) // uncomment this line
});
