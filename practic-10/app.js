// 1`
let table = document.querySelector('table') 

table.addEventListener('mouseover',MouseoverCells)
table.addEventListener('mouseout',MouseoutCells)

function MouseoverCells(event){
  if(event.target.closest('td')){
    event.target.style.background = 'tomato'
  }
}

function MouseoutCells(event){
  if(event.target.closest('td')){
    event.target.style.background = 'transparent'
  }
}
// ///////////////////////////////////////////////



// 2
let container = document.querySelector('.container')

container.addEventListener('contextmenu', BanClick)
container.addEventListener('selectstart',BanSelection)
container.addEventListener('mousedown',BanMousedown)


function BanClick(event){
  event.preventDefault()
}

function BanSelection(){
  return false
}

function BanMousedown(event){
  event.preventDefault()
}

// ////////////////////////////////////////////


// 3

let button = document.querySelector('.button')
button.addEventListener('click',Like)

function Like(event){
let count = document.querySelector('.count')
count.innerHTML = Number(count.innerHTML)+1
}

// ////////////////////////