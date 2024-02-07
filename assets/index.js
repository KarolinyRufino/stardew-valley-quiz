const perguntas = [
    {
        pergunta: "Quem é o desenvolvedor do jogo Stardew Valley?",
        respostas: [
            "ConcernedApe",
            "Nintendo",
            "EA Sports"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome da fazenda que o jogador herda no início do jogo?",
        respostas: [
            "Green Acres Farm",
            "Maplewood Farm",
            "Stardew Valley Farm"
        ],
        correta: 2
    },
    {
        pergunta: "Em qual estação o Festival do Ovo ocorre em Stardew Valley?",
        respostas: [
            "Primavera",
            "Verão",
            "Outono"
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o prefeito de Pelican Town em Stardew Valley?",
        respostas: [
            "Lewis",
            "Linus",
            "Gus"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a habilidade inicial do personagem principal em Stardew Valley?",
        respostas: [
            "Culinária",
            "Pesca",
            "Agricultura"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do mineiro que vive nas profundezas da mina em Stardew Valley?",
        respostas: [
            "Clint",
            "Kent",
            "Marlon"
        ],
        correta: 2
    },
    {
        pergunta: "Quantas estações existem em um ano em Stardew Valley?",
        respostas: [
            "Quatro",
            "Cinco",
            "Seis"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do vilão que você enfrenta nas profundezas da mina em Stardew Valley?",
        respostas: [
            "Sr. Qi",
            "Goblin Rei",
            "Esqueleto Escamoso"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a fruta favorita do Abigail em Stardew Valley?",
        respostas: [
            "Morango",
            "Cereja",
            "Amora"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a primeira colheita que o jogador pode plantar em Stardew Valley?",
        respostas: [
            "Batata",
            "Pé de café",
            "Chirivia"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item);
            if(estaCorreta){
                corretas.add(item);
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }

        // append sempre é a última linha
        quizItem.querySelector('dl').appendChild(dt);
    }

    // remove
    quizItem.querySelector('dl dt').remove();

    // coloca a pergunta na tela
    quiz.appendChild(quizItem); 
}