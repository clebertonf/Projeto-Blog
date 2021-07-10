const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./src/public'));

app.use(require('./src/routers/index'));

app.listen(PORT, console.log(`Online na porta ${PORT}`));
