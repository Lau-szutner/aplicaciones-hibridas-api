import authorModel from '../models/authorModel.js';

export const getAuthor = async (req, res) => {
  try {
    const author = await authorModel.find();
    res.json(author);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const author = new authorModel({ ...req.body });
    const newAuthor = await author.save();
    res.json(newAuthor);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

// export const getBookById = async (req, res) => {
//   try {
//     const book = await librosModel.findById(req.params.id);
//     if (!Book) {
//       return res.status(404).json({ message: 'Libro no encontrado' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

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

// export const deleteBook = async (req, res) => {
//   try {
//     const deleted = await librosModel.findByIdAndDelete(req.params.id);
//     res.send(deleted);
//   } catch (error) {
//     res.status(400).json({ json: error.messages });
//   }
// };
