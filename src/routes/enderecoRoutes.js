const express = require('express');
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

module.exports = router;
