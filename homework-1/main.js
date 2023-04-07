// 1
// let x = prompt('Привет, сколько вам лет?');
//     if (x<=2){
//         alert('Вы являетесь ребенком');}
//     else if (x>=12 && x<=18){
//         alert('Вы являетесь подростком');}
//     else if (x>=19 && x<=59){
//         alert('Вы являетесь взрослым');}
//     else if (x>=60){
//         alert('Вы являетесь пенсионером');}
//     else{
//         alert('Ваш возраст не найден');} 


// 2
// let x = prompt('Введите число от нуля до десяти');
// let dict = {1:'!',
//         2:'@',
//         3:'#',
//         4:'$',
//         5:'%',
//         6:'^',
//         7:'&',
//         8:'*',
//         9:'(',
//         10:')'};
// alert(`Символ указанного числа на клавиатуре является:  ${dict[x]}`)


// 3
// let num = prompt('Введите трехзначное число');
// let list = {
//     1:num[0],
//     2:num[1],
//     3:num[2],
// };
// if (num[0] == num[1]){
//     alert(`Одинаковые числа присутствуют: ${num[0]} и ${num[1]}`)
// }
// else if (num[0] == num[2]){
//     alert(`Одинаковые числа присутствуют: ${num[0]} и ${num[2]}`)
// }
// else if (num[1] == num[2]){
//     alert(`Одинаковые числа присутствуют: ${num[1]} и ${num[2]}`)
// }
// else{
//     alert('Одинаковые числа отсутствуют')
// };


// 4
// let year = prompt('Введите год');
// let y = (year % 400) + (year % 4) - (year % 100);
// if (y==0){
//     alert('Год является высокосным');
// }
// else{
//     alert('Год не является высокосным');
// }


// 5
// let word = prompt('Введите пятизначное число'); 
// let new_word = word.split("").reverse().join("");
// if (word==new_word){
//     alert('Введенное число является палиндромом')
// }
// else{
//     alert('Введенное число не является палиндромом')
// }


// 6 
// let summa = prompt('Введите сумму в долларах');
// let list_currency =['EUR' , 'UAN' , 'AZN']  ;
// let currency = prompt(`Выберите валюту для конвертирования: \n${list_currency}`);
// if (currency == list_currency[0]){
//     let result = summa * 0.92362;
//     alert('Конвертация произведена успешно');
//     alert(`Итоговая сумма в Евро составляет: ${result}`);
// }
// else if (currency == list_currency[1]){
//     let result = summa * 6.83;
//     alert('Конвертация произведена успешно');
//     alert(`Итоговая сумма в Китайских юанях составляет: ${result}`);
// }
// else if (currency == list_currency[2]){
//     let result = summa * 1.7;
//     alert('Конвертация произведена успешно');
//     alert(`Итоговая сумма в Aзербайджанском манате составляет: ${result}`);
// }
// else{
//     alert('Выбранной вами валюты не существует')
// }


// 7
// let summa = prompt('Введите вашу сумму покупки');
// if (summa>=200 && summa<300){
//     let discount = 3;
//         discount_summa = (summa*discount)/100;
//         total = summa - discount_summa;
//         alert(`Сумма вашей скидки в долларах составляет : ${discount_summa} `);
//         alert(`К оплате : ${total} доллара`);
// }
// else if (summa>=300 && summa<500){
//     let discount = 5;
//         discount_summa = (summa*discount)/100;
//         total = summa - discount_summa;
//         alert(`Сумма вашей скидки в долларах составляет : ${discount_summa} `);
//         alert(`К оплате : ${total} доллара`);
// }
// else if (summa>=500){
//     let discount = 7;
//         discount_summa = (summa*discount)/100;
//         total = summa - discount_summa;
//         alert(`Сумма вашей скидки в долларах составляет : ${discount_summa} `);
//         alert(`К оплате : ${total} доллара`);
// }


// 8
// const p = 3.14;
// let circumference = prompt('Введите длинну окружности');
//     per_square = prompt('Введите периметр квадрата');
//     radius_circle = circumference/(2*p);
//     side_square = per_square/4;
//     if (side_square >= radius_circle*2){
//         alert('Такая окружность смогла поместиться в указанный квадрат')
//     }
//     else{
//         alert('Такая окружность не смогла поместиться в указанный квадрат')
//     }

// 9
// let answers = ['Красный','Желтый','Зеленый']  
//     count = 0;
//     question = prompt(`Какой цвет светофора является запрещающим? \n${answers}`);
//         if (question == 'Красный'){
//             alert('Правильно');
//             alert('Следующий вопрос...');
//             count+=1;
//         }
//         else{
//             alert('Неверно');
//             alert('Следующий вопрос...');
//         }
//     answers = ['Обед и ужин','Макароны','Чипсы','Пивасик']   
//     question = prompt(`Что нельзя съесть на завтрак?\n${answers}`);
//         if (question == 'Обед и ужин'){
//             alert('Правильно');
//             alert('Следующий вопрос...');
//             count+=1;
//         }
//         else{
//             alert('Неверно');
//             alert('Следующий вопрос...');
//         }
//     answers = ['Javascript','Python','C+','PHP']   
//     question = prompt(`Какой самый лучший язык в мире? \n${answers}`);
//         if (question == 'Python'){
//             alert('Ну конечно же) это + балл кстати');
//             count+=1;
//         }
//         else{
//             alert('Темная сторона силы еще поглотит тебя');
//         }

//     alert(`Ваша итоговая отметка : ${count}`)














