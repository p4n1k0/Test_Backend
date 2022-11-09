const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');

const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

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
                },
            );

        expect(response.status).to.equal(200);
        expect(response.body).to.
            deep.equal({ message: 'Endereço cadastrado com sucesso com o id 1' });
    });

    afterEach(sinon.restore);
});
