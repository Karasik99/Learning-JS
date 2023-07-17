

// 1
// const container = document.querySelector('.container')
// let cat = document.querySelector('img')
// let x;
// let y;

// document.body.addEventListener('mousemove',function(event){
//     x = event.pageX
//     y = event.pageY 
//     cat.style.top = y +'px'
//     cat.style.left = x+'px'
// })
// ////////////////////////////////////////////////////


// 2

// let x = document.querySelector('.aside-title')
// let menu = document.querySelector('.aside')
// let ar = document.querySelectorAll('.aside-items')


// x.addEventListener('click',function(){
//     menu.classList.toggle('active')
//     ar.forEach(element => {
//         element.classList.toggle('active')
//     });
// })
// /////////////////////////////////////////



// 3

const selectors = document.querySelector('.selectors')
let fruits = document.querySelectorAll('.fruit')


selectors.addEventListener('click',function(event){
    if(event.target.closest('.selectors-btn')){
        fruits.forEach(element => {
            if(event.target.getAttribute('data-color') == element.getAttribute('data-color')){
                // element.style.display = 'block'
                // element.style.opacity = '1'
                element.style.boxShadow = `${0}px ${0}px ${20}px black`
            }
            else{
                // element.style.opacity = '0'
                // element.style.zIndex = '0'
                // element.style.transition = 'all 2s'
                element.style.boxShadow = 'none'
            }
        });
        }
    }
)

// //////////////////////////////////////////////