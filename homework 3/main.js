

// 1
// Напишите функцию, которая принимает на вход массив строк и добавляет к каждой строке префикс "Item: ", используя метод concat. Функция должна возвращать новый массив с измененными строками.



// ВНИМАНИЕ УСЛОВИЕ НЕ ДО КОНЦА ПОНЯЛ , 
// ПОЭТОМУ 2 ВАРИАНТА РЕШЕНИЯ, ОДИН ИЗ НИХ ПРАВИЛЬНЫЙ, СКОРЕЕ ВСЕГО ВТОРОЙ

function task_1(x){
    let simple_str = ['Item :']
    let list = []
    let result=[];
    for(item in x){
        let list_2 = list.concat(simple_str,x[item])
        result.push(list_2)
    }
    console.log(result)
}

// task_1(['Hello','Nikita','Monday','Friday'])


function task_1_2(x){
    let simple_str = 'Item : '
    let list = ''
    let result=[];
    for(item in x){
        let list_2 = list.concat(simple_str,x[item])
        result.push(list_2)
    }
    console.log(result)
}

// task_1_2(['Hello','Nikita','Monday','Friday'])




// 2
// Создайте программу, которая сначала объединяет два массива целых чисел с помощью метода concat, а затем удаляет из нового массива все дублирующиеся элементы. Результат должен выводиться на экран

function task_2(){
    let list_1 = [1,2,3,4,5]
    let list_2 = [1,2,3,4,5,6]
    let list = [];
    let result = list.concat(list_1,list_2)
    console.log('Сложение двух массивов методом concat: \n\n' + result+'\n\n')
    for(let item=0;item<result.length;item++){
        let find_index = result.indexOf(item,item)
        if(find_index>=0){
            result.splice(find_index,1)
        }
    }
    console.log('\nНовый,очищенный массив с помощью отлова по индексу, и удаления повторений: \n\n' + result+ '\n\n')
}


// 3
// Напишите функцию, которая принимает на вход массив целых чисел и возвращает новый массив, содержащий элементы исходного массива, начиная с второго элемента и заканчивая предпоследним элементом, используя метод slice.

function task_3(list){
    let result = list.slice(2,-1)
    console.log(result)
}

// task_3([1,2,3,4,5,6,7,8,9,10])


// 4
// Создайте программу, которая принимает на вход массив объектов и возвращает новый массив, содержащий только определенные свойства объектов. Например, если у вас есть массив объектов, содержащий свойства name, age и gender, вы можете использовать метод slice, чтобы создать новый массив, содержащий только свойства name и age.


function task_4(list){
    let result = list.slice(0,3)
    console.log(result)
}

// task_4([{name:'Nikita'},
//         {age:'23'},
//         {status:'Junior'},
//         {render:'M'},
//         {weight:'67'},
//         {height:'170'},])


// 5
// Создайте программу, которая принимает на вход массив целых чисел и вставляет в него новый элемент после каждого элемента, значение которого равно нулю, используя метод splice. Например, если у вас есть массив [1, 0, 2, 0, 3], после выполнения программы он будет выглядеть как [1, 0, 0, 2, 0, 0, 3].



// Комп по какой то причине не отрабатывает хотя вроде все ок
//  в общем не сделал

function task_5(list){
    for(let item = 0; item<list.length;item++){
        let find_index = list.indexOf(item,0)
        if (find_index==0){
            list.splice(0,0,0)
        }
    }
    console.log(list)
}


task_5([0,1,0,2,0,3])


// 6
//Напишите функцию, которая принимает на вход массив объектов и удаляет из него все объекты, у которых значение свойства age меньше заданного значения, используя метод splice

function task_6(list){
    let age = 6
    for(let item = 0; item<list.length;item++){
        if(list[item]<=age){
            list.splice(0,2)
        }
    }
    console.log(list)
}


// task_6([0,1,2,3,4,5,6,7,8,9,10,11,12])