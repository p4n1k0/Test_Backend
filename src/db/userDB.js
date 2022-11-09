const conn = require('./connection');

const insert = (user) => conn.execute(
  `INSERT INTO usuarios
      (nome, sobrenome, email, telefone, cpf) VALUES (?, ?, ?, ?, ?)`,
  [user.nome, user.sobrenome, user.email, user.telefone, user.cpf],
);

const findAll = () => conn.execute('SELECT * FROM usuarios');

const findById = (id_usuario) => conn.execute('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);

const update = (user, id_usuario) => conn.execute(
  `UPDATE usuarios
    SET nome = ?, sobrenome = ?, email = ?, telefone = ?, cpf = ? WHERE id_usuario = ?`,
  [user.nome, user.sobrenome, user.email, user.telefone, user.cpf, id_usuario],

);

const remove = (id_usuario) => conn.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario]);

module.exports = { insert, findAll, findById, update, remove };
