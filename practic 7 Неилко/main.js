


let firstString = 'qwertyuisdvsvdyyDDDDEEEEEop[]asdfghAjkl;zxcvbnm,../'
let secondString = '11'
let simpleStr = 'hello my nam&e is ni&kita'


function maxLength(strOne,strTwo){
    if(strOne.length>strTwo.length){
        console.log('1')
    }
    else if(strOne.length<strTwo.length){
        console.log('-1')
    }
    else{
        console.log('0')
    }
}



function firstLetterUp(str){
    console.log(str[0].toUpperCase()+str.slice(1,))
}


function vowels(x){
    let count = 0;
    let vowel = ['a','o','u','e','i','y']
    for(item of x){
        for(element of vowel){
            if(element.toUpperCase() == item || element.toLowerCase() == item){
                count+=1
            }
        }
    }
    console.log(count)
}

// vowels(firstString)


let spams = 'привет медвед '
function spam(spams){
    count = 0;
    let spam = ['бесплатно','100%','увеличение продаж','только сегодня',' не удаляйте','ххх']
    let newSpams =(spams.toUpperCase().split(' '))
    for(item of newSpams){
        for(element of spam){
            if(element.toUpperCase() == item){
                count++
            }
        }
    }
    if(count>=1){
        console.log(true + ' В строке спам есть ')
    }
    else{
        console.log('В строке спама нет')
    }
}   
// spam(spams)



function truncate(str, maxlength) {
    if(str.length>maxlength){
        console.log(str.slice(0,maxlength)+'...')
    }
    else{
        console.log(str)
    }
}

// truncate(firstString,4)


function pallindrom(str) {
    let x = str.split('').reverse().join('')
    if(x == str){
        console.log('Слово является паллиндромом')
    }
    else{
        console.log('Слово не является паллиндромом')
    }
}

// pallindrom(simpleStr)

function countStr(str) {
    let list = str.split(' ')
    console.log(list.length)
}

// countStr(simpleStr)

function maxWordlenght(str) {
    let list = str.split(' ')
    let newList = []
    for(item of list){
        newList.push(item.length)
    }
    newList.sort((a,b)=>a-b)
    for(item of list){
        if(newList[newList.length-1] == item.length){
            console.log(item)
        }
    }
}

// maxWordlenght(simpleStr)


function averageLength(str) {
    let list = str.split(' ')
    let summ = 0
    for(item of list){
        summ+=item.length
    }
    console.log(summ/list.length)
}



