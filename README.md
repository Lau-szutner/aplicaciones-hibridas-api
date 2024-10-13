# API DE LIBROS

Rutas para peticiones:

```js
router.get('/', getLibros);
router.get('/:id', getBookById);
router.post('/', createLibros);
router.delete('/:id', deleteBook);
```

## Metodos HTTP para libros

- **GET** || localhost:3000/libros // Obtiene todos los libros de la coleccion con sus autores.
- **GET** || localhost:3000/libros/:id // Obtiene un libro por su id
- **POST** || localhost:3000/libros // Crea un nuebo libro y lo añade a la coleccion.
- **DELETE** || localhost:3000/libros/:id // Elimina un libro por su id
