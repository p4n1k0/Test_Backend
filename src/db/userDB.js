const conn = require('./connection');

const insert = (user) => conn.execute(
  `INSERT INTO usuarios
      (id_usuario, nome, sobrenome, email, telefone, cpf) VALUES (?, ?, ?, ?, ?, ?)`,
  [user.id_usuario, user.nome, user.sobrenome, user.email, user.telefone, user.cpf],
);

const findAll = () => conn.execute('SELECT * FROM usuarios');

module.exports = { insert, findAll };
