const fs = require('fs');
const path = require('path');

const rutaEntradas = path.join(__dirname, 'entradas.json');

function obtenerTodasLasEntradas() {
  const datos = fs.readFileSync(rutaEntradas, 'utf-8');
  return JSON.parse(datos);
}

function obtenerEntradaPorId(id) {
  const entradas = obtenerTodasLasEntradas();
  return entradas.find(entrada => entrada.id == id);
}

module.exports = {
  obtenerTodasLasEntradas,
  obtenerEntradaPorId
};