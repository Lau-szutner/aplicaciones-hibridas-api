import librosModel from '../models/librosModel.js';

export const getLibros = async (req, res) => {
  try {
    // Aquí estamos usando .populate() para obtener los detalles del autor
    const libros = await librosModel.find().populate('author');
    res.json(libros);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const createLibros = async (req, res) => {
  try {
    const libro = new librosModel({ ...req.body });
    const newLibro = await libro.save();
    res.json(newLibro);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await librosModel.findById(req.params.id).populate('author');
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(book); // Asegúrate de enviar el libro encontrado
  } catch (error) {
    console.error('Error al buscar el libro:', error); // Log para depuración
    res.status(400).json({ error: error.message });
  }
};

// export const updateBook = async (req, res) => {
//   try {
//     const update = await librosModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.send(update);
//   } catch (error) {
//     res.status(400).json({ json: error.messages });
//   }
// };

export const deleteBook = async (req, res) => {
  try {
    const deleted = await librosModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.send({ message: 'Libro eliminado correctamente', deleted });
  } catch (error) {
    console.error('Error al eliminar el libro:', error); // Agrega este log
    res.status(400).json({ json: error.message }); // Cambié a error.message
  }
};
