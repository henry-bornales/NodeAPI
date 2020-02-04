const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT||5000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));






app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, ()=>{
    console.log(`Server is started in port ${PORT}`);
});