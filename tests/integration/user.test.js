const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de user', function () {
    it('Testando o cadastro de um usuário ', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

        const response = await chai
            .request(app)
            .post('/usuarios')
            .send(
                {
                    id_usuario: 1,
                    nome: 'Luke',
                    sobrenome: 'Skywalker',
                    email: 'luke.skywalker@trybe.com',
                    telefone: '851 678 4453',
                    cpf: '059.322.455-02'
                },
            );

        expect(response.status).to.equal(201);

        expect(response.body).to.
            deep.equal({ message: 'Usuário cadastrado com sucesso com o id 1' });
    });

    afterEach(sinon.restore);
});
