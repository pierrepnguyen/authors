const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/authors', controllers.getAll)
    .get('/authors/:id', controllers.getOne)
    .post('/authors', controllers.createAuthor)
    .put('/authors/:id', controllers.editAuthor)
    .put('/books/:id', controllers.addBook)
    .put('/books/:id', controllers.updateBook)
    .delete('/authors/:id', controllers.deleteAuthor)
    .put('/authors/:id', controllers.deleteBook)
}