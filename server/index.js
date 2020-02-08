const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3333;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(cors());
app.use(morgan('dev'));

//static files
//'/:productId'
app.use(express.static(path.join(__dirname, '../client/dist')));

//router
///api is my baseurl is
app.use('/api', router);

//listen
app.listen(port, () => console.log(`Kayrub's App listening on port ${port}!`));