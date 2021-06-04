const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// conect mongodb
mongoose.Promise = global.Promise;
mongoose
  .connect(
    'mongodb+srv://serge_avila7:XQz8tH6TKc7Axsa@cluster0.wfotm.mongodb.net/api-store?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log('BD connnect'))
  .catch((error) => console.log(error));
// create server
const app = express();

// enable bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
app.use(cors());

// app routes
app.use('/', routes());

// public folder
app.use(express.static('uploads'));

// server port
// app.listen(5000, function () {
app.listen(process.env.PORT || 5000, function () {
  console.log('¡Servidor web Express en ejecución!');
});
