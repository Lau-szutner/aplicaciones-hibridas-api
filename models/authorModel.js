import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  dob: {
    type: String,
    required: [true, 'La fecha de nacimiento es obligatorio'],
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model('Author', AuthorSchema);

export default Author;
