const { response } = require("express"); // Importa la función `response` desde el módulo express
const bcrypt = require("bcryptjs"); // Importa la librería bcryptjs para el cifrado de contraseñas
// Importar modelos
const Categoria = require("../modules/categoria"); // Importa el modelo de Categoria desde el módulo '../modules/categoria'

// Controlador para la solicitud GET a la ruta de categorias
const categoriasGet = async (req, res = response) => {
  const body = req.query; // Extrae los parámetros de la consulta
  const { q, nombre, page = 1, limit } = req.query; // Extrae los parámetros de la consulta
  const categorias = await Categoria.find(); // Consulta todos los documentos de la colección Categoria
  res.json({
    categorias, // Devuelve un objeto JSON con los categorias obtenidos de la base de datos
  });
};

// Controlador para la solicitud GET de promedio de categorias
const PromGet = async (req, res = response) => {
  const body = req.query; // Extrae los parámetros de la consulta
  const { q, nombre, page = 1, limit } = req.query; // Extrae los parámetros de la consulta
  const categorias = await Categoria.find(); // Consulta todos los documentos de la colección Categoria
  categorias.forEach((numero) => console.log(numero)); // Muestra cada documento de categoria por consola
  res.json({
    msg: "Prom API controlador", // Devuelve un mensaje indicando que es el controlador del promedio
    q,
    nombre,
    page,
    limit,
    categorias, // Devuelve los categorias obtenidos de la base de datos
  });
};

// Controlador para la solicitud POST a la ruta de categorias
const categoriasPost = async (req, res = response) => {
  const body = req.body; // Extrae el cuerpo de la solicitud
  let msg = ""; // Inicializa una variable para el mensaje de respuesta
  const categoria = new Categoria(body); // Crea un nuevo objeto Categoria con los datos del cuerpo de la solicitud
  const { id_categoria, nombre, descripcion } = req.body; // Extrae los datos del cuerpo de la solicitud
  await categoria.save(); // Guarda el categoria en la base de datos
  msg = "Categoria Registrado"; // Asigna un mensaje de éxito
  console.log(msg); // Muestra el mensaje de respuesta por consola
  res.json({
    msg: msg, // Devuelve el mensaje de respuesta como un objeto JSON
  });
};

// Controlador para la solicitud PUT a la ruta de categorias
const categoriasPut = async (req, res = response) => {
  const body = req.body; // Extrae los parámetros de la consulta
  console.log(body); // Muestra los parámetros de la consulta por consola
  const { id_categoria, nombre, descripcion } = req.body; // Extrae los datos del cuerpo de la solicitud
  // Busca y actualiza un categoria en la base de datos
  try {
    const categoria = await Categoria.findOneAndUpdate(
      { _id:id_categoria },
      { nombre: nombre, descripcion: descripcion},
      { new: true}
  
    );
    res.json({
      msg: "Categoria Modificado", // Devuelve un mensaje indicando que se modificó el categoria
      categoria, // Devuelve el categoria modificado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al modificar la categoria "});
  }
};

// Controlador para la solicitud DELETE a la ruta de categorias
const categoriasDelete = async (req, res = response) => {
  const { id_categoria } = req.params; // Extrae el ID del categoria de los parámetros de la URL
  try {
    // Busca y elimina un categoria en la base de datos
    const categoria = await Categoria.findOneAndDelete({ _id: id_categoria });
    if (!categoria) {
      // Si no se encuentra el categoria, devuelve un mensaje de error
      return res.status(404).json({ msg: "Categoria no encontrado" });
    }
    res.json({
      msg: "Categoria Eliminado", // Devuelve un mensaje indicando que se eliminó el categoria
      categoria, // Devuelve el categoria eliminado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al eliminar la categoria" }); // Manejo de errores
  }
};


// Exporta los controladores de las rutas de categorias para que estén disponibles para otros módulos
module.exports = {
  categoriasGet,
  categoriasPost,
  categoriasPut,
  categoriasDelete,
  PromGet,
};
