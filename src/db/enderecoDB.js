const conn = require('./connection');

const insert = (endereco) => conn.execute(
  `INSERT INTO enderecos_usuario
      (logradouro, numero, cidade, uf, cep, bairro, complemento, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  [endereco.logradouro, endereco.numero, endereco.cidade, endereco.uf, endereco.cep,
  endereco.bairro, endereco.complemento, endereco.id_usuario],
);

const findByUserId = (id_usuario) => conn.execute(
  'SELECT * FROM enderecos_usuario WHERE id_usuario = ?', [id_usuario],
);

const findById = (id_endereco_usuario) => conn.execute(
  'SELECT * FROM enderecos_usuario WHERE id_endereco_usuario = ?', [id_endereco_usuario],
);

const update = (endereco, id_endereco_usuario) => conn.execute(
  `UPDATE enderecos_usuario
    SET logradouro = ?, numero = ?, cidade = ?, uf = ?, cep = ?, bairro = ?, complemento = ?,
    id_usuario WHERE id_endereco_usuario = ?`,
  [endereco.logradouro, endereco.numero, endereco.cidade, endereco.uf, endereco.cep,
  endereco.bairro, endereco.complemento, endereco.id_usuario, id_endereco_usuario],
);

const remove = (id_endereco_usuario) => conn.execute(
  'DELETE FROM enderecos_usuario WHERE id_endereco_usuario = ?', [id_endereco_usuario]
);

module.exports = { insert, update, findByUserId, findById, remove };
