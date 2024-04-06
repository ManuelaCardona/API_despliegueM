const { response } = require("express"); // Importa la función `response` desde el módulo express

// Controlador para la solicitud GET a la ruta de categorias
categoriasGet = (req, res = response) => {
  res.json({
    msg: "GET API", // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con GET
  });
};

// Controlador para la solicitud POST a la ruta de categorias
categoriasPost = (req, res = response) => {
  res.json({
    msg: "POST API", // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con POST
  });
};

// Controlador para la solicitud PUT a la ruta de categorias
categoriasPut = (req, res = response) => {
  res.json({
    msg: "PUT API", // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
  });
};

// Controlador para la solicitud DELETE a la ruta de categorias
categoriasDelete = (req, res = response) => {
  res.json({
    msg: "DELETE API", // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con DELETE
  });
};

// Exporta los controladores de las rutas de categorias para que estén disponibles para otros módulos
module.exports = {
  categoriasGet,
  categoriasPost,
  categoriasPut,
  categoriasDelete,
};
