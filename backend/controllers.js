const { Author } = require('./models');

module.exports = {

  getAll: (req, res) => {
    Author.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  editAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addBook: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID},{$push: {books: DATA}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  editBook:(req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log(DATA);
    console.log(DATA.index);
    Author.findOne({_id:ID})
      .then(author => {
        console.log("books", author.books[DATA.index]);
        author.books[DATA.index].votes = DATA.votes;
        console.log(author.books[DATA.index].votes);
        author.save();
        console.log(author);
      })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateBook: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteBook:(req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log(ID);
    console.log(DATA);
    Author.findOne({_id:ID})
      .then(author => {
        console.log(DATA.idx);
        author.books.splice([DATA.index],1);
        author.save();
      })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

}