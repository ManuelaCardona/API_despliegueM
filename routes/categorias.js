const { Router } = require('express'); // Importa la función Router de express para crear un router
const router = Router(); // Crea una instancia de Router
const { categoriasGet, categoriasPost, categoriasPut, categoriasDelete, PromGet } = 
require('../controllers/categoria'); // Importa los controladores desde el archivo '../controllers/categoria'
// Define rutas y asigna controladores a cada ruta
// Ruta para obtener todos los categorias (GET '/')
router.get('/', categoriasGet);
// Ruta para obtener el promedio de categorias (GET '/promedio')
router.get('/promedio', PromGet);
// Ruta para crear un nuevo categoria (POST '/')
router.post('/', categoriasPost);
// Ruta para actualizar un categoria existente (PUT '/')
router.put('/:id_categoria', categoriasPut);
// Ruta para eliminar un categoria existente (DELETE '/')
router.delete('/:id_categoria', categoriasDelete);
// Exporta el router para que esté disponible para otros módulos
module.exports = router;
