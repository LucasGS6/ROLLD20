
    
function showTormenta20Menu (){
document.getElementById('tormenta20').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('tormenta20MainMenu').style.display = 'block';
})};
document.getElementById('MainMenu-button').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('tormenta20MainMenu').style.display = 'none';
});

function showDndMainMenu (){
    document.getElementById('Dnd').addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('DndMainMenu').style.display = 'block';
    })};
    document.getElementById('MainMenu-button').addEventListener('click', function() {
        document.querySelector('.container').style.display = 'block';
        document.getElementById('DndMainMenu').style.display = 'none';
    });
    function showCofcMainMenu (){
        document.getElementById('Cofc').addEventListener('click', function() {
            document.querySelector('.container').style.display = 'none';
            document.getElementById('CofcMainMenu').style.display = 'block';
        })};
        document.getElementById('MainMenu-button').addEventListener('click', function() {
            document.querySelector('.container').style.display = 'block';
            document.getElementById('CofcMainMenu').style.display = 'none';
        });
        
    

// SISTEMA DE ROLAGEM DE DADO
document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden'); //ESCONDER SIDEBAR
});


function rollDice6(sides) {
    const dice6 = document.getElementById('dice6');
    const result = document.getElementById('result');
   

    // DEIXA O RESULTADO EM TEXTO
    result.innerText = '';

    // ADD ROLAGEM NOS DADOS
    dice6.classList.add('rolling');
 
    // TIMEOUT PARA EXECUTAR O RESULTADO PÓS ROLAGEM
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerHTML = `${rollResult}`;
        dice6.classList.remove('rolling');
    }, 1000); // SINCRONIZA COM A DURAÇÃO DE ANIMAÇÃO DO CSS
}
function rollDice20(sides) {
    const dice20 = document.getElementById('dice20');
    const result = document.getElementById('result');
   

 
    result.innerText = '';

    
    dice20.classList.add('rolling');
 
    
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice20.classList.remove('rolling');
    }, 1000); 
}
function rollDice4(sides) {
    const dice4 = document.getElementById('dice4');
    const result = document.getElementById('result');
   


    result.innerText = '';

   
    dice4.classList.add('rolling');
 
   
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice4.classList.remove('rolling');
    }, 1000); 
}
function rollDice10(sides) {
    const dice10 = document.getElementById('dice10');
    const result = document.getElementById('result');
   

    
    result.innerText = '';

    
    dice10.classList.add('rolling');
 
   
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice10.classList.remove('rolling');
    }, 1000); 
}
function rollDice12(sides) {
    const dice12 = document.getElementById('dice12');
    const result = document.getElementById('result');
   

    result.innerText = '';

    
    dice12.classList.add('rolling');
 
    
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice12.classList.remove('rolling');
    }, 1000); 
}
function rollDice8(sides) {
    const dice8 = document.getElementById('dice8');
    const result = document.getElementById('result');
   

    result.innerText = '';

    
    dice8.classList.add('rolling');
 
    
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice8.classList.remove('rolling');
    }, 1000); 
}

function rollDice100(sides) {
    const dice12 = document.getElementById('dice100');
    const result = document.getElementById('result');
   

    
    result.innerText = '';

    
    dice100.classList.add('rolling');
 
    
    setTimeout(() => {
        const rollResult = Math.floor(Math.random() * sides) + 1;
        result.innerText = `${rollResult}`;
        dice12.classList.remove('rolling');
    }, 1000); 
}