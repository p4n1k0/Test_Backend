const conn = require('./connection');

const insert = (endereco) => conn.execute(
    `INSERT INTO enderecos_usuario
      (logradouro, numero, cidade, uf, cep, bairro, complemento) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [endereco.logradouro, endereco.numero, endereco.cidade, endereco.uf, endereco.cep,
    endereco.bairro, endereco.complemento],
);

module.exports = { insert };
