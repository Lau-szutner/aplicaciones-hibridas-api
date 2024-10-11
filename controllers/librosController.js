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
