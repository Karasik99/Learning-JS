

// Напишите функцию, которая принимает массив чисел и умножает каждый элемент на 2. Результат сохраняется в том же массиве. 

let task_1 = ((items)=>{
    items.forEach(element => {
        console.log(element*2)
    });
})


// task_1([1,2,3,4,5])


// Напишите функцию, которая принимает массив строк и выводит на экран только те строки, которые содержат букву "а"


let task_2 =((items)=>{
    let result = []
    items.filter(element=>{
        if(element.indexOf('a')>=0){
            result.push(element)
        }
    })
    console.log(result)
})


// task_2(['banan','apple','kivi','cherry'])


// Создайте массив объектов, который будет содержать информацию о разных пользователях (имя, возраст, город и т.д.). Используя функцию forEach, выведите на экран информацию о всех пользователях, которые живут в городе "Москва".

let simple_list = [{name:'Nik',
                    age:'23',
                    city:'Minsk',},
                    {name:'Vasya',
                    age:'32',
                    city:'Moscow',},
                    {name:'Alex',
                    age:'18',
                    city:'Tokio',},
                    {name:'Masha',
                    age:'12',
                    city:'Moscow',},
                    {name:'Jorik',
                    age:'43',
                    city:'Moscow',}]

let task_3 = ((simple_list)=>{
    simple_list.forEach(element=>{
        if(element.city=='Moscow'){
            console.log('Зовут : '+ element.name +'\n'+'Лет : '+ element.age)
        }
    })
})

// task_3(simple_list)


// Из массива чисел отфильтруйте только положительные числа.

let task_4 =((items)=>{
    items.filter(element=>{
        if(element%2==0){
            console.log(element)
        }
    })
})

// task_4([1,2,3,4,5,6,7,8,9,10])

// Из массива строк отфильтруйте только те, которые начинаются с буквы "а".

let task_5 =((items)=>{
    items.filter(element=>{
        if(element.indexOf('a')==0){
            console.log(element)
        }
    })
})


// task_5(['banan','apple','kivi','cherry'])


// Из массива объектов пользователей отфильтруйте только тех, у кого возраст больше 30 лет.


let task_6 = ((simple_list)=>{
    simple_list.forEach(element=>{
        if(element.age>=30){
            console.log('Зовут : '+ element.name +'\n'+'Лет : '+ element.age)
        }
    })
})

// task_6(simple_list)


// Из массива чисел отфильтруйте только нечетные числа.
let task_7 =((items)=>{
    items.filter(element=>{
        if(element%2==1){
            console.log(element)
        }
    })
})

// task_7([1,2,3,4,5,6,7,8,9,10])