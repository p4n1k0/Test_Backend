DROP SCHEMA IF EXISTS Teste_Backend;
CREATE SCHEMA Teste_Backend;
USE Teste_Backend;
CREATE TABLE usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sobrenome VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
telefone VARCHAR(45) NOT NULL,
cpf VARCHAR(45) UNIQUE NOT NULL
);
CREATE TABLE enderecos_usuario ( 
id_endereco_usuario INT AUTO_INCREMENT PRIMARY KEY,
logradouro VARCHAR(255) NOT NULL,
numero VARCHAR(45) NOT NULL,
cidade VARCHAR(255) NOT NULL,
uf VARCHAR(2) NOT NULL,
cep VARCHAR(45) NOT NULL,
bairro VARCHAR(255) NOT NULL,
complemento VARCHAR(20) NOT NULL,
id_usuario INT NOT NULL,
CONSTRAINT fk_enderecos_usuario_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);
