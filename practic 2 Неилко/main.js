// 1

// let x = prompt("Введите число");
// if (x>0){
//     alert('Ваше число положительное')
// }
// else if (x<0){
//     alert('Ваше число отрицательное')
// }
// else {
//     alert('Ваше число ноль')
// }

// 2

// let x = prompt("Введите возраст");
// if (x>0 && x<120){
//     alert('Ваш возраст корректен')
// }
// else {
//     alert('Ваш возраст не корректен')
// }

// 3

// let x = prompt("Введите число");
// if (x>0){
//     alert('модуль вашего числа ' + x)
// }
// else{
//     x = -x
//     alert('модуль вашего числа ' + x)
// }

// 4

// let hour = prompt("Введите часы");
// let min = prompt("Введите минуты");
// let sek = prompt("Введите секунды");
// if(hour>=0 && hour<=24){
//     if (min>=0 && min<=60){
//         if (sek>=0 && sek <= 3600){
//             alert('Ваше время :' + hour +'часов, '+ min+'минут, '+sek+'секунд, ')
//         }
//         else{
//             alert('неверно введены данные')
//         }
//     }
//     else{
//         alert('неверно введены данные')
//     }
// }
// else{
//     alert('неверно введены данные')
// }


// 5

// let x = prompt("Введите x");
// let y = prompt("Введите y");
// if (x<0 && y>0){
//     alert('Ваша ось номер 1')
// }
// else if (x>0 && y>0){
//     alert('Ваша ось номер 2')
// }
// else if (x>0 && y<0){
//     alert('Ваша ось номер 3')
// }
// else{
//     alert('Ваша ось номер 4')
// }

// 6

// let month = prompt('Введите номер месяца');
// switch(+month){
//     case 1: alert('Январь');
//     break
//     case 2: alert('Февраль');
//     break;
//     case 3: alert('Март');
//     break
//     case 4: alert('Апрель');
//     break
//     default: alert('Не понимаю');
//     break
// }

// 7 

// let x = prompt("Введите x");
// let y = prompt("Введите y");
// let res = prompt('+ - / *');
// switch(res){
//     case '+': alert('Ваша сумма равна:' + (+x + +y))
//     break;
//     case '-': alert('Ваша разница равна:' + (+x - +y))
//     break
//     case '/': alert('Ваша деление равно:' + (+x / +y))
//     break
//     case '*': alert('Ваша умножение равно:' + (+x * +y))
//     break
//     default: alert('Я вас не понимаю');
//     break
// }

// 8 

// let x = prompt("Введите x");
// let y = prompt("Введите y");
// let c =(x>y)? x:y;
// alert(c)

// 9 

// let x = prompt("Введите x");
// let c = (x%5)? alert('число не делится'):alert('число делится');
// alert(c)


// 10 
// let x = prompt('Введите планету');
// x = x.toLocaleLowerCase();
// let result = (x=='земля')? alert('Привет землянин') : alert('Привет инопланетянин');