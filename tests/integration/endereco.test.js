const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');

const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const enderecoList = [
    {
        id_endereco_usuario: 1,
        logradouro: 'Rua Aquela Lá',
        numero: '132',
        cidade: 'Ratanabá',
        uf: 'NS',
        cep: '85055-003',
        bairro: 'Cidade Nova',
        complemento: '11a',
        id_usuario: 1
    },
    {
        id_endereco_usuario: 2,
        logradouro: 'Rua Aquela Lá',
        numero: '312',
        cidade: 'Ranabá',
        uf: 'NS',
        cep: '85055-003',
        bairro: 'Nova',
        complemento: '11c',
        id_usuario: 2
    },
];

describe('Testando os endpoints de enderecos-usuario', function () {
    it('Testando o cadastro de um endereço', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
        const response = await chai
            .request(app)
            .post('/enderecos-usuario')
            .send(
                {
                    logradouro: 'Rua Aquela Lá',
                    numero: '132',
                    cidade: 'Ratanabá',
                    uf: 'NS',
                    cep: '85055-003',
                    bairro: 'Cidade Nova',
                    complemento: '11a',
                    id_usuario: 1,
                },
            );

        expect(response.status).to.equal(200);
        expect(response.body).to.
            deep.equal({ message: 'Endereço cadastrado com sucesso com o id 1' });
    });

    it('Testando a listagem de endereços  pelo id 1 do usuario', async function () {
        sinon.stub(connection, 'execute').resolves([[enderecoList[0]]]);
        const response = await chai
            .request(app)
            .get('/enderecos-usuario/1');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(enderecoList[0]);
    });

    it('Testando a listagem de endereço pelo id 1', async function () {
        sinon.stub(connection, 'execute').resolves([[enderecoList[0]]]);
        const response = await chai
            .request(app)
            .get('/enderecos-usuario/1');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(enderecoList[0]);
    });

    it('Testando a alteração de um endereço com o id 1', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const response = await chai
            .request(app)
            .put('/enderecos-usuario/1')
            .send(
                {
                    logradouro: 'Rua Mudou',
                    numero: '312',
                    cidade: 'Banatará',
                    uf: 'SN',
                    cep: '85055-003',
                    bairro: 'Nova Cidade',
                    complemento: '11c',
                    id_usuario: 1
                },
            );

        expect(response.status).to.equal(200);
        expect(response.body).to
            .deep.equal({ message: 'Endereço de id 1 atualizado com sucesso' });
    });

    it('Testando a exclusão de endereço com id 1', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const response = await chai
            .request(app)
            .delete('/enderecos-usuario/1');

        expect(response.status).to.equal(200);
        expect(response.body).to
            .deep.equal({ message: 'Endereço de id 1 excluído com sucesso' });
    });

    afterEach(sinon.restore);
});
