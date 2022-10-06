import * as express from 'express';

const app = express();
const port = 3000;

app.get('/',(request,response) => {
    response.send('Hello World !!');

});

app.get('/bsm',(request,response) => {
    response.send(' == Mentalidade == <bs> Persistencia <br> Responsabilidade Pessoal <br> Orientação ao Futuro <br> Mentalidade de Crescimento <br> == Habilidade == <br> Trabalho em equipe <br> Atenção aos Detalhes <br> Proatividade <br> Comunicação !!');

});

app.get('/mysql',(request,response) => {
    response.send('== Objetivo de aprentizagem da semana == <br> == BANCO DE DADOS MYSQL == !!');

});

app.listen(port,() =>{
    console.log(`Server is running at port ${port}!`);
});
