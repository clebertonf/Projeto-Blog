const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (_req, resp) => {
  resp.render('index');
});

app.listen(PORT, console.log(`Online na porta ${PORT}`));
