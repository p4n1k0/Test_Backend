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

describe('Testando os endpoints de usuarios', function () {
    it('Testando o cadastro de um usuário ', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

        const response = await chai
            .request(app)
            .post('/usuarios')
            .send(
                {
                    nome: 'Luke',
                    sobrenome: 'Skywalker',
                    email: 'luke.skywalker@trybe.com',
                    telefone: '851 678 4453',
                    cpf: '059.322.455-01'
                },
            );

        expect(response.status).to.equal(200);
        expect(response.body).to.
            deep.equal({ message: 'Usuário cadastrado com sucesso com o id 1' });
    });

    it('Testando a listagem de todos os usuários', async function () {
        sinon.stub(connection, 'execute').resolves([userList]);
        const response = await chai
            .request(app)
            .get('/usuarios');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(userList);
    });

    it('Testando a listagem do usuario com id 1', async function () {
        sinon.stub(connection, 'execute').resolves([[userList[0]]]);
        const response = await chai
            .request(app)
            .get('/usuarios/1');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(userList[0]);
    });

    it('Testando a alteração de um usuário com o id 1', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const response = await chai
            .request(app)
            .put('/usuarios/1')
            .send(
                {
                    nome: 'Lucão',
                    sobrenome: 'Andarilho dos céus',
                    email: 'lucao.andarilho@trybe.com',
                    telefone: '851 678 4453',
                    cpf: '059.322.455-01'
                },
            );

        expect(response.status).to.equal(200);
        expect(response.body).to
            .deep.equal({ message: 'Usuário de id 1 atualizado com sucesso' });
    });

    it('Testando a exclusão de usuário com id 1', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const response = await chai
            .request(app)
            .delete('/usuarios/1');

        expect(response.status).to.equal(200);
        expect(response.body).to
            .deep.equal({ message: 'Usuário de id 1 excluído com sucesso' });
    });

    afterEach(sinon.restore);
});
