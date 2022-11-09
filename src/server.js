const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
  console.log(`API Teste_Backend está sendo executada na porta ${port}`);

  // O código abaixo é para testa a comunicação com o MySQL
  const [ result ] = await connection.execute('SELECT 1');

  if (result) {
    console.log('MySQL connection OK');
  }
});