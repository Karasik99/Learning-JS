var x = false;
function findclick(id,shift=false){
    let simple_list= {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0',
        'ё': 'ё',
        'й': 'й',
        'ц': 'ц',
        'у': 'у',
        'к': 'к',
        'е': 'е',
        'н': 'н',
        'г': 'г',
        'ш': 'ш',
        'щ': 'щ',
        'з': 'з',
        'х': 'х',
        'ъ': 'ъ',
        'ф': 'ф',
        'ы': 'ы',
        'в': 'в',
        'а': 'а',
        'п': 'п',
        'р': 'р',
        'о': 'о',
        'л': 'л',
        'д': 'д',
        'ж': 'ж',
        'э': 'э',
        'я': 'я',
        'ч': 'ч',
        'с': 'с',
        'м': 'м',
        'и': 'и',
        'т': 'т',
        'ь': 'ь',
        'б': 'б',
        'ю': 'ю',
        'tab': 'Tab',
        '-': '-',
        '=': '=',
        '/' : '/',
        '/': '/',
        'del': 'Del',
        'capslock': 'Capslock',
        'enter': 'Enter',
        'lshift': 'left Shift',
        'rshift': 'right Shift',
        'Backspace': 'Backspace',
        'up': 'up',
        'down': 'down',
        'left': 'left',
        'right': 'right',
        'lctrl': 'left ctrl',
        'rctrl': 'right ctrl',
        'lalt':'left alt',
        'ralt':'right alt',
        'пробел':'Пробел',
        'win':'Win',
    }
    if(simple_list[id]=='left Shift'){
        let g = document.getElementById('lshift')
        let color = g.style.background='blue'
        x = true
    }
    else if(simple_list[id]=='right Shift'){
        let g = document.getElementById('lshift')
        let color = g.style.backgroundColor='rgb(68, 65, 65)'
        let tg = g.style.color='grey'
        x = false
    }
    else if(simple_list[id]=='Пробел'){
        return probel(simple_list[id])
    }
    else if(simple_list[id]=='Tab'){
        return tab(simple_list[id])
    }
    else if(simple_list[id]=='Backspace'){
        return backspace(simple_list[id])
    }
    else if(simple_list[id]=='Del'){
        return delele(simple_list[id])
    }
    else if(simple_list[id]=='Win'){
        return win(simple_list[id])
    }
    return toUp(simple_list[id],x)
}
    
function toUp(word,y){
    let textarea = document.querySelector('textarea')
    if(y==true){
        if(word =='left Shift'){
            textarea.append('')
        }
        else{
            textarea.append(word.toUpperCase())
        }
    }
    else{
        if(word =='right Shift'){
            textarea.append('')
        }
        else{
            textarea.append(word)
        }
    }
}

function probel(word){
    let textarea = document.querySelector('textarea')
    if(word=='Пробел'){
        textarea.append(' '+' ')
        }
}

function tab(word){
    let textarea = document.querySelector('textarea')
    if(word=='Tab'){
        textarea.append('\n')
        let q = document.getElementById('tab')
        q.style.background='blue'
        setTimeout(() => q.style.background='rgb(68, 65, 65)', 1000);
        }
}

function backspace(word){
    let textarea = document.querySelector('textarea')
    if(word=='Backspace'){
        let back = textarea.textContent.slice(0,length-1)
        textarea.textContent = back
        }
}

function delele(word){
    let textarea = document.querySelector('textarea')
    if(word=='Del'){
        let q = document.getElementById('del')
        q.style.background='blue'
        let back = textarea.textContent.slice(0,0)
        textarea.textContent = back
        setTimeout(() => q.style.background='rgb(68, 65, 65)', 1000);
    }
}

function win(word){
    if(word=='Win'){
    let textarea = document.querySelector('textarea')
    textarea.append(`
    Просмотр основных сведений о вашем компьютере 

    Выпуск Windows
    Windows 10 Домашняя
    @ Корпорация Майкрософт (Microsoft Corporation). Все права защищены.
    
    Система
    
    Процессор:               Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz 2.00 GHz
    Установленная память:    8.00 ГБ
    Тип системы:             64-разрядная операционная система,процессор х64`)
}
}