const express = require('express');
const userDB = require('../db/userDB');
const { emailValidation } = require('../middleware/emailValidation');

const router = express.Router();

router.post('/', emailValidation, async (req, res) => {
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

router.get('/:id_usuario', async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const [[result]] = await userDB.findById(id_usuario);

        if (result) {
            res.status(200).json(result);

        } else {
            res.status(400).json({ message: 'Usuário não encontrado' });

        }
    } catch (err) {
        console.log(err);

        res.status(400).json({ message: err.sqlMessage });
    }
});

router.put('/:id_usuario', async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const user = req.body;

        const [result] = await userDB.update(user, id_usuario);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: `Usuário de id ${id_usuario} atualizado com sucesso` });

        } else {
            res.status(400).json({ message: 'Usuário não encontrado' });
        }

    } catch (err) {
        res.status(500).json({ message: err.sqlMessage });
    }
});

router.delete('/:id_usuario', async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const [result] = await userDB.remove(id_usuario);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: `Usuário de id ${id_usuario} excluído com sucesso` });

        } else {
            res.status(400).json({ message: 'Usuário não encontrada' });
        }

    } catch (err) {
        res.status(500).json({ message: err.sqlMessage });
    }
});

module.exports = router;
