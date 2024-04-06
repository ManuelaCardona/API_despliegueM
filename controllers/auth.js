const Categoria = require("../modules/categoria");

// Función de inicio de sesión
const login = async (req, res) => {
  const { id_categoria, nombre, descripcion } = req.body; // Extrae los campos del cuerpo de la solicitud

  // Busca un categoria en la base de datos que coincida con el id_categoria proporcionado
  const categoria = await Categoria.findOne({ id_categoria });

  try {
    // Verifica si el categoria existe en la base de datos
    if (!categoria) {
      return res.status(400).json({
        msg: "Categoria no encontrado",
      });
    }

    // Verifica si el categoria está activo
    if (!categoria.estado) {
      return res.status(400).json({
        msg: "Categoria inactivo",
      });
    }
  } catch (err) {
    return res.status(400).json({
      msg: "No se pudo encontrar el categoria.", // Mensaje de error genérico en caso de fallo
    });
  }
};

// Exporta la función de inicio de sesión para que esté disponible para otros módulos
module.exports = {
  login,
};
