const express = require('express');
const path = require('path');
const logger = require('morgan'); // Opcional, para ver logs

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Configura la carpeta 'public' para que funcione el CSS
app.use(express.static(path.join(__dirname, 'public')));

// 3. Rutas
app.get('/', (req, res) => {
  res.render('home', { title: 'Mi Aplicación' }); 
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;