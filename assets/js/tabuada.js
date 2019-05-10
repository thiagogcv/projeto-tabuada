/*
    Exemplo de uma tabuada
*/

//Declaração de uma função
function calculaTabuada() {

    //Obtendo do DOM p tbody da tabela
    let tabuada = document.querySelector('#tabuada tbody');

    //Obtendo o valor de A do campo input e convertendo em inteiro
    let valorA = parseInt(document.querySelector('#valorA').value);

    //Limpando o conteúdo do tbody
    tabuada.innerHTML = '';

    //Criando um laço de repetição
    for (valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        //Criando o template  das colunas da linha atual
        let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;

        //Criado o elemento tr
        let tr = document.createElement('tr');

        //Inserindo as colunas na linha
        tr.innerHTML = template;

        //inserindo a linha na tabela
        tabuada.append(tr);

    };

};

//Chamando a função pela primeira vez
calculaTabuada();

//Adicionando o evento  de alteração ao campo número
document.querySelector('#valorA').addEventListener('change', calculaTabuada);
    
