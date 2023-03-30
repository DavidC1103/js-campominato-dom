const btn = document.getElementById('btn')
const container = document.querySelector('.dc-container')
const level = document.getElementById('levels')

const levelDiff = [100, 81, 49]
const bombsNum = 16
let arrBomb = []
let points = 0
const boxes = [];




//creo il bottone e aggiungo tutte le funzioni all'inizio del gioco
btn.addEventListener('click', function(){
    reset()
    const numBox = levelDiff [level.value]
    genGrid(numBox)
    arrBomb = spawnBombs(numBox)
})

//genero la griglia e la stamp su html
function genGrid(numBox){
    const griglia = document.createElement('div')
    griglia.className = 'dc-container'
    for (let i = 1 ; i <= numBox; i++){
        let box = createBox(numBox, i);
        boxes.push(box);
        griglia.append(box)
    }
    container.append(griglia)
    return griglia
}

//creo le box
function createBox(numBox, id) {
    let box = document.createElement('div')
    box.className = 'box'
    box.classList.add('dimbox' + numBox)
    box.aboxId = id;
    console.log(id);
    box.addEventListener('click', function() {
        console.log(this.aboxId);
        this.classList.add('clicked')
    });
    return box;
}
//spawno le bombe
function spawnBombs(numBox){
//creo un array dove aggiungere le bombe
    const bombs = [];
    console.log(bombs);
//creo un ciclo while per dare valore a l'array per raggiungere il valore di bombsNum (16)    
    while(bombs.length < bombsNum){
//se non è presente la pusho
        const genBomb = getRandom(1,numBox )        
        if(!bombs.includes(genBomb)) bombs.push(genBomb)
    }
//aggiungo la classe bomb a alla griglia    
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.addEventListener('click', function(){
            if (bombs.includes(this.aboxId)) {
                console.log('bombaaa',bombs);
                this.classList.add('bomb')
            }
        });
        
    }
    return bombs
}




//resetto tutto
function reset (){
    container.innerHTML = ''
    arrBomb = 0
}


function getRandom(min, max){
    let error = false
    let errorMsg;
    if(isNaN(min) || isNaN(max)){
         error = true
         errorMsg = 'min e max devono essere numeri' 
    }
    return Math.floor(Math.random() * (max + min - 1) + min)
}
