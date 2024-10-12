import librosModel from '../models/librosModel.js';

export const getLibros = async (req, res) => {
  try {
    const libros = await librosModel.find();
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
    const book = await librosModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const update = await librosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(update);
  } catch (error) {
    res.status(400).json({ json: error.messages });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deleted = await librosModel.findByIdAndDelete(req.params.id);
    res.send(deleted);
  } catch (error) {
    res.status(400).json({ json: error.messages });
  }
};
