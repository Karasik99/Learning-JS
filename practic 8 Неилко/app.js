


// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

let automobile = {
    manufacturer: 'Japan',
    model:'Honda',
    year:'1999',
    speed:80,
}

function Information(auto){
console.log(`${auto.model} car, was created in the country of ${auto.manufacturer}, in ${auto.year}, the average speed of this car is ${auto.speed} km.h`)
}

function Averagetime(auto,distance){
    let time = distance/auto.speed
    let h = time/4
    console.log(`
    Средняя скорость автомобиля равна ${auto.speed} km/h, 
    Дистанция для прохождения равна ${distance} km,
    Время затраченное на поездку будет составлять ${time+Math.floor(h)} часов
    (Исходя из условия того что каждые 4 часа мы будем отдыхать по 1 часу) `)
}

// Averagetime(automobile,880)
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

let fraction = {
    numerator:'',
    denominator:'',
}

function Summfraction(fraction,x,y){
    fraction.numerator = x
    fraction.denominator = y
    fraction.Summfraction = function(){
        return `Сумма равна ${this.numerator+this.denominator} `
    }
    console.log(fraction.Summfraction(this.numerator,this.denominator))
}

function Differencefraction(fraction,x,y){
    fraction.numerator = x
    fraction.denominator = y
    fraction.Differencefraction = function(){
        return `Разность равна ${this.numerator-this.denominator} `
    }
    console.log(fraction.Differencefraction(this.numerator,this.denominator))
}

function Multiplicationfraction(fraction,x,y){
    fraction.numerator = x
    fraction.denominator = y
    fraction.Multiplicationfraction = function(){
        return `Умножение равно ${this.numerator*this.denominator} `
    }
    console.log(fraction.Multiplicationfraction(this.numerator,this.denominator))
}

function Divisionfraction(fraction,x,y){
    fraction.numerator = x
    fraction.denominator = y
    fraction.Divisionfraction = function(){
        return `Деление равно ${this.numerator/this.denominator} `
    }
    console.log(fraction.Divisionfraction(this.numerator,this.denominator))
}

function Reductionfraction(fraction,x,y){
    fraction.numerator = x
    fraction.denominator = y
    fraction.Reductionfraction = function(){
                var result ;
                while (this.numerator!=this.denominator) {
                if (this.numerator>this.denominator) {
                    this.numerator = this.numerator -this.denominator;
                }
                else {
                    this.denominator = this.denominator - this.numerator;
                }
                }
        result = this.numerator;
        return `НОД равен ${result} `
        
    }
    console.log(fraction.Reductionfraction(this.numerator,this.denominator))
}

function call(fraction,x,y){
    Summfraction(fraction,x,y)
    Differencefraction(fraction,x,y)
    Multiplicationfraction(fraction,x,y)
    Divisionfraction(fraction,x,y)
    Reductionfraction(fraction,x,y)
}

// call(fraction,20,10)

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Создать объект, описывающий время (часы, минуты, секун-
//     ды), и следующие функции для работы с этим объектом.
//     1. Функция вывода времени на экран.
//     2. Функция изменения времени на переданное количество
//     секунд.
//     3. Функция изменения времени на переданное количество
//     минут.
//     4. Функция изменения времени на переданное количество
//     часов.
//     Учтите, что в последних 3-х функциях, при изменении одной
//     части времени, может измениться и другая. Например: если ко
//     времени «20:30:45» добавить 30 секунд, то должно получиться
//     «20:31:15», а не «20:30:75».


let watch={
    h:14,
    min:36,
    sek:25,
}


function Infowatch(watch){
console.log(`На данный момент ${watch.h} часов, ${watch.min} минут, ${watch.sek} секунд`)

}

function Timehour(watch,h){
    if(watch.h + h>=24){
        let g = watch.h + h-24
        watch.h = g
        console.log(`установленное время изменено`)
        console.log(watch)
    }
    else{
        let g = watch.h + h
        watch.h = g
        console.log(`установленное время изменено`)
        console.log(watch)
    }
}

function Timeminuts(watch,min){
    if(min<=60){
        if(watch.min + min>=60){
            let q = (watch.min+min)-60
            watch.h=watch.h+1
            watch.min = q
            console.log(watch)
        }
        else{
            let q = (watch.min+min)
            watch.min = q
            console.log(watch)
        }
    }
    else{
        console.log('Введеное количество минут не допустимо')
    }
}

function Timesec(watch,sek){
    if(sek<=60){
        if(watch.sek + sek>=60){
            let q = (watch.sek+sek)-60
            watch.min=watch.min+1
            watch.sek = q
            console.log(watch)
        }
        else{
            let q = (watch.sek+sek)
            watch.sek = q
            console.log(watch)
        }
    }
    else{
        console.log('Введеное количество секунд не допустимо')
    }
}


function callv2(watch){
    console.log(watch)
    Timehour(watch,12)
    Timeminuts(watch,13)
    Timesec(watch,15)
}

// callv2(watch)