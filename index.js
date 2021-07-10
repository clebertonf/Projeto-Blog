const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

// app.use(require('./src/routers/index'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./src/public'));

app.get('/', (_req, resp) => {
  resp.render('index');
});

app.get('/admin/categories/new', (_req, resp) => {
  resp.render('categories/newCategorie');
});

app.listen(PORT, console.log(`Online na porta ${PORT}`));
