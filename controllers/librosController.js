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
    const Book = await librosModel.findById(req.params.id);
    if (!Book) {
      return res.status(404);
      res.json(Book);
    }
  } catch (error) {
    res.status(400).json({ json: error.messages });
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
