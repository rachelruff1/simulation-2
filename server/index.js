require("dotenv").config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive')
const AuthCtrl = require('./auth_controller');

const app = express();
app.use(json());
app.use(cors());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log());

app.get('/api/users', AuthCtrl.getAll);
app.get('/api/user/:id', AuthCtrl.getUser)
app.post('/api/register', AuthCtrl.register);

const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`App listening on port ${port}!`));