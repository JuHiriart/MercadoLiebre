const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 2020; //para heroku

app.listen(port, () => console.log('Listening on http://localhost:'+port));
//app.listen(3000, () => console.log("Servidor en marcha"))



const public = path.resolve(__dirname, '../public');
app.use(express.static(public));                                          //tengo acceso a lo que tengo en la carpeta public con estas lineas


app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})

app.get('/signin', function (req, res){
    res.sendFile(path.resolve(__dirname, 'views/signin.html'));
})

app.get('/login', function (req, res){
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
})