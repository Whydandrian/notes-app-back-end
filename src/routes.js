const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  // route untuk menambahkan data note
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  // route untuk menampilkan semua data note
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  // route untuk menampilkan data note berdasarkan id
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  // route untuk mengedit data note berdasarkan id
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  // route untuk menghapus data note berdasarkan id
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  }
];

module.exports = routes ;
