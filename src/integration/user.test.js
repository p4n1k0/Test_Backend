const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../app');
const connection = require('../../db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de user', function () {
    it('Testando o cadastro de uma pessoa ', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

        const response = await chai
            .request(app)
            .post('/usuarios')
            .send(
                {
                    nome: 'Luke',
                    sobrenome: 'Skywalker',
                    email: 'luke.skywalker@trybe.com',
                    telefone: '851 678 4453',
                    cpf: '059.322.455-02'
                },
            );

        expect(response.status).to.equal(201);

        expect(response.body).to.
            deep.equal({ message: 'Usuario cadastrado com sucesso com o id 42' });

    });

    afterEach(sinon.restore);
});
