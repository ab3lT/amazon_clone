console.log("hello, World");

const express = require('express');

const PORT = 3000;

const app = express();


// CREATING AN API
// GET, PUT, POST, DELETE, UPDATE -> CRUD
// http://<youripaddress>/Hello-world
app.get('/', (req, res) => {
    res.json({Name: "Abel"});
})
app.get('/hello-world', (req, res) => {
    res.json({hi: "Hello Wold"});
})
app.listen(PORT,  () => {
    console.log(`Connected at port ${PORT}`);
})