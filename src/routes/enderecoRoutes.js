const express = require('express');
const { end } = require('../db/connection');
const enderecoDB = require('../db/enderecoDB')

const router = express.Router();


router.post('/', async (req, res) => {
    const endereco = req.body;

    try {
        const [result] = await enderecoDB.insert(endereco);

        res.status(200).json({
            message: `Endereço cadastrado com sucesso com o id ${result.insertId}`
        });

    } catch (err) {
        console.log(err);

        res.status(400).json({ message: 'Ocorreu um erro ao cadastrar um endereço' });
    }
});

router.put('/:id_endereco_usuario', async (req, res) => {
    try {
        const { id_endereco_usuario } = req.params;
        const endereco = req.body;
        const [result] = await enderecoDB.update(endereco, id_endereco_usuario);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: `Endereço de id ${id_endereco_usuario} atualizado com sucesso` });
        } else {
            res.status(400).json({ message: 'Endereço não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.sqlMessage });
    }
});

module.exports = router;
