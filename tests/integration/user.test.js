const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const userList = [
    {
        id_usuario: 1,
        nome: 'Luke',
        sobrenome: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        telefone: '851 678 4453',
        cpf: '059.322.455-01'
    },
    {
        id_usuario: 42,
        nome: 'Luke',
        sobrenome: 'Skywalker',
        email: 'luke.skywalker2@trybe.com',
        telefone: '851 678 5665',
        cpf: '059.322.455-02',
    },
];

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

        expect(response.status).to.equal(200);

        expect(response.body).to.
            deep.equal({ message: 'Usuário cadastrado com sucesso com o id 1' });
    });

    it('Testando a listagem de todos usuários', async function () {
        sinon.stub(connection, 'execute').resolves([userList]);
        const response = await chai
            .request(app)
            .get('/usuarios');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(userList);
    });
    
    afterEach(sinon.restore);
});
