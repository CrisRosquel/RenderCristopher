var express = require('express');
var router = express.Router();
var servicioDatos = require('../data/servicioDatos');

router.get('/', function(req, res, next) {
  const entradas = servicioDatos.obtenerTodasLasEntradas();
  res.render('inicio', { entradas: entradas });
});

router.get('/articulo/:id', function(req, res, next) {
  const entrada = servicioDatos.obtenerEntradaPorId(req.params.id);
  
  if (entrada) {
    res.render('articulo', { entrada: entrada });
  } else {
    res.redirect('/');
  }
});

module.exports = router;