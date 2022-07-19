// import form packages
const express = require('express');
const mongoose = require('mongoose');
//Imports From Other Files
const authRouter = require('./routes/auth')

//INIT
const PORT = 3000;

const app = express();
const DB = "mongodb+srv://abel:abel1224@cluster0.forfvkc.mongodb.net/?retryWrites=true&w=majority"

// middleware
// CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT,  () => {
    console.log(`Connected at port ${PORT}`);
})