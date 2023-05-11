// Создать объект, описывающий прямоугольник (хранит коор-
//     динаты левой верхней и правой нижней точек), и написать следу-
//     ющие функции для работы с таким объектом.
//     1. Функция принимает объект-прямоугольник и выводит
//     информацию о нем (где какая точка расположена).
//     2. Функция принимает объект-прямоугольник и возвращает
//     его ширину.
//     3. Функция принимает объект-прямоугольник и возвращает
//     его высоту.
//     4. Функция принимает объект-прямоугольник и возвращает
//     его площадь.
//     5. Функция принимает объект-прямоугольник и возвращает
//     его периметр.

let figure = {
    a:20,
    b:20,
    c:10,
    d:10,
}

function Information(figure){
    let q = `<div class="container">
        <div class="x">
            <p>c = ${figure.c} см</p>
            <p>d = ${figure.d} см</p>
        </div>
        <div class="y">
            <p>a = ${figure.a} см</p>
            <p>b = ${figure.b} см</p>
        </div>
    </div>`
    document.body.innerHTML = q
}

// Information(figure)

function DetailInformation(figure){
    console.log(`
    Ширина данного прямоугольника равна: ${figure.a}
    Высота данного прямоугольника равна: ${figure.c}
    Площадь данного прямоугольника равна: ${figure.a * figure.c}
    Периметр данного прямоугольника равна: ${figure.a + figure.b + figure.c + figure.d}
    `)
}
// /////////////////////////////////////////////////////////////////

// 6. Функция изменения ширины прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// ширину.
// 7. Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
// 8. Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.

function Changewidth(figure,width){
    let q = `<div class="container">
        <div class="x">
            <p>c = ${figure.c + width } см</p>
            <p>d = ${figure.d + width} см</p>
        </div>
        <div class="y">
            <p>a = ${figure.a} см</p>
            <p>b = ${figure.b} см</p>
        </div>
    </div>`
    document.body.innerHTML = q
    let g = document.querySelector('div')
    g.style.width = `${(figure.c + width) * 10}px`
}

function Changeheight(figure,height){
    let q = `<div id='heights' class="container">
        <div class="x">
            <p>c = ${figure.c} см</p>
            <p>d = ${figure.d} см</p>
        </div>
        <div class="y">
            <p>a = ${figure.a + height} см</p>
            <p>b = ${figure.b + height} см</p>
        </div>
        </div>`
    document.body.innerHTML = q
    let g = document.getElementById('heights')
    g.style.height = `${(figure.a + height) * 10}px`
}


function Createfigure(figure,a,b,c,d){
    figure.a = a
    figure.b = b
    figure.c = c
    figure.d = d
    let q = `<div id='cont' class="container">
        <div class="x">
            <p>c = ${figure.c} см</p>
            <p>d = ${figure.d} см</p>
        </div>
        <div class="y">
            <p>a = ${figure.a} см</p>
            <p>b = ${figure.b} см</p>
        </div>
        </div>`
    document.body.innerHTML = q 
    let find = document.getElementById('cont')
    find.style.height = `${figure.a * 10}px`
    find.style.width = `${figure.c * 10}px`
}

// Createfigure(figure,40,40,30,30)
// ////////////////////////////////////////////////////////////////////////////////
// 9. Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 10. Функция смещения прямоугольника по оси Y. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 11. Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значе-
// ния: сдвиг по оси X и сдвиг по оси Y.

function OffsetX(figure,sdvigx){
    Createfigure(figure,40,40,30,30)
    let find = document.getElementById('cont')
    find.style.transform = `translateX(${sdvigx}px)`
}

function OffsetY(figure,sdvigy){
    Createfigure(figure,40,40,30,30)
    let find = document.getElementById('cont')
    find.style.transform = `translateY(${sdvigy}px)`
}

function Offset(figure,sdvigx,sdvigy){
    Createfigure(figure,40,40,30,30)
    let find = document.getElementById('cont')
    find.style.transform = `translateX(${sdvigx}px)`
    find.style.transform = `translateY(${sdvigy}px)`
}

// Offset(figure,200,200)



