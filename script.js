const btn = document.getElementById('btn')
const container = document.querySelector('.dc-container')
const level = document.getElementById('levels')

const levelDiff = [100, 81, 49]
const bombsNum = 16
let arrBomb = []
let points = 0






btn.addEventListener('click', function(){
    container.classList.remove('hide')
    reset()
    const numBox = levelDiff [level.value]
    console.log(numBox);
    generate(numBox)
    
})


function generateGrid(numBox){
    const griglia = document.createElement('div')
    griglia.className = 'dc-container'
    for (let i = 1 ; i <= numBox; i++){
        let box = createBox(numBox);
        griglia.append(box)
    }
    container.append(griglia)
}

function createBox(numBox, id){
    let box = document.createElement('div')
    box.className = 'box'
    box.classList.add('dimbox' + numBox)
    box._boxId = id
    console.log(box)
    return box;

}


function reset (){
    container.innerHTML = ''
}


