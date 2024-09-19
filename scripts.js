document.addEventListener('DOMContentLoaded', function() {
    // Menu
    document.getElementById('tormenta20')?.addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('tormenta20MainMenu').style.display = 'block';
    });

    document.getElementById('MainMenu-button')?.addEventListener('click', function() {
        document.querySelector('.container').style.display = 'block';
        document.getElementById('tormenta20MainMenu').style.display = 'none';
        document.getElementById('DndMainMenu').style.display = 'none';
        document.getElementById('CofcMainMenu').style.display = 'none';
        document.getElementById('TormentaFicha').style.display = 'none';
    });

    document.getElementById('Dnd')?.addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('DndMainMenu').style.display = 'block';
    });

    document.getElementById('Cofc')?.addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('CofcMainMenu').style.display = 'block';
    });

    document.getElementById('ficha')?.addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('tormenta20MainMenu').style.display = 'none';
        document.getElementById('TormentaFicha').style.display = 'block';
    });

    document.getElementById('backToTormentaMenu')?.addEventListener('click', function() {
        document.getElementById('TormentaFicha').style.display = 'none';
        document.getElementById('tormenta20MainMenu').style.display = 'block';
    });

    // Sistema de rolagem de dado
    document.getElementById('toggle-btn')?.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('hidden'); // Esconder sidebar
    });

    function rollDice(sides, diceId) {
        const dice = document.getElementById(diceId);
        const result = document.getElementById('result');

        result.innerText = '';
        dice.classList.add('rolling');

        setTimeout(() => {
            const rollResult = Math.floor(Math.random() * sides) + 1;
            result.innerText = `${rollResult}`;
            dice.classList.remove('rolling');
        }, 1000);
    }

    ['dice6', 'dice20', 'dice4', 'dice10', 'dice12', 'dice8', 'dice100'].forEach((diceId) => {
        document.getElementById(diceId)?.addEventListener('click', function() {
            const sides = parseInt(diceId.replace('dice', ''));
            rollDice(sides, diceId);
        });
    });

    // Criar ficha de personagem
    document.getElementById('addPersonagemBtn')?.addEventListener('click', function() {
        document.getElementById('personagemForm').style.display = 'block';
    });

    document.getElementById('cancelarBtn')?.addEventListener('click', function() {
        document.getElementById('personagemForm').style.display = 'none';
    });

    document.getElementById('formPersonagem')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const descricao = document.getElementById('descricao').value;
        const ficha = document.getElementById('fichaPdf').files[0];

        const personagemDiv = document.createElement('div');
        personagemDiv.className = 'personagem-item';
        personagemDiv.innerHTML = `
            <h3>${nome}</h3>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Descrição:</strong> ${descricao}</p>
            <p><strong>Ficha:</strong> <a href="${URL.createObjectURL(ficha)}" target="_blank">Ver Ficha</a></p>
            <button class="delete-personagem">Excluir</button>
        `;

        document.getElementById('personagemList').appendChild(personagemDiv);
        document.getElementById('personagemForm').style.display = 'none';
        document.getElementById('formPersonagem').reset();

        personagemDiv.querySelector('.delete-personagem').addEventListener('click', function() {
            personagemDiv.remove();
        });
    });
});
