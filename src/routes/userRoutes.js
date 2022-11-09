const express = require('express');
const userDB = require('../db/userDB');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.body;

    try {
        const [result] = await userDB.insert(user);

        res.status(200).json({
            message: `Usuário cadastrado com sucesso com o id ${result.insertId}`
        });

    } catch (err) {
        console.log(err);

        res.status(400).json({ message: 'Ocorreu um erro ao cadastrar um usuário' });
    }
});

router.get('/', async (_req, res) => {
    try {
        const [result] = await userDB.findAll();

        res.status(200).json(result);
    } catch (err) {
        console.log(err);

        res.status(400).json({ message: err.sqlMessage });
    }
});

module.exports = router;
