// 1


let counter = document.querySelector('.counter')
let count = document.querySelector('.counter-text')
counter.addEventListener('click',Clicker)


function Clicker(event){
  if(event.target.closest('.arrow-1')){
    count.innerHTML = (Number(count.innerHTML)+1)
    TrackingCount(count.innerHTML)
  }
  else if(event.target.closest('.arrow-2')){
    count.innerHTML = (Number(count.innerHTML)-1)
    TrackingCount(count.innerHTML)
  }
}

function TrackingCount(num){
  let btn = document.querySelector('.arrow-2')
  if (num == 0 ){
    btn.style.background = 'black'
    btn.style.pointerEvents = 'none'
  }
  else{
    btn.style.background = 'tomato'
    btn.style.pointerEvents = 'all'
  }
}

// ////////////////////////

// 2


const colors = ['yellow','blue','green','red','white','pink','violet','grey','gold']
let casement = document.querySelector('.casement')
let container = document.querySelector('.container')
casement.addEventListener('click',ClickerCasement)


function ClickerCasement(event){
  let min = 0 
  let max = colors.length
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  if(event.target.closest('.btn')){
    let block = document.createElement('div')
    block.classList.add('block')
    block.style.background = colors[random]
    container.appendChild(block)
  }
  else if(event.target.closest('.block')){
    event.target.remove()
  }
}

// /////////////////////////////////


// 3

let col = document.querySelector('.colors')
col.addEventListener('click',Сhangecolor)
function AddColors(){
  colors.forEach(element => {
    let color = document.createElement('div')
    color.setAttribute('data-color',element)
    color.classList.add('color')
    color.style.background = element
    col.appendChild(color)
  });
}

function Сhangecolor(event){
  if(event.target.closest('.color')){
    let text = document.querySelector('.box-text')
    text.style.color = event.target.getAttribute('data-color')
  }
}

AddColors()

// ///////////////////////////////