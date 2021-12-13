let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
let path = require('path');

// Route
const studentRoute = require('../backend/routes/student.route')
const api = require('../backend/routes/user.routes')

// mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Connecté sur mongoDB!')
},
  error => {
    console.log('Erreur de connexion mongodB : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)

app.use('/public', express.static('public'));
// app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', api)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connecté sur le port ' + port)
})

// add middleware
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..','altee-testa', 'build', 'index.html'));
 })
 



app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});