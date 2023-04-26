

// 1
// <!--Напишите программу, которая находит сумму элементов массива.
function task_1(x){
    let result=0;
    x.forEach(element => {
        console.log(element)
        result+=element
    });
    console.log(result)
}


// task_1([1,2,3,4,5,6])



// 2
// Напишите программу, которая находит произведение элементов массива.
function task_2(x){
    let result=1;
    x.forEach(element => {
        console.log(element)
        result*=element
    });
    console.log(result)
}

// task_2([1,2,3,4,5,6])


//3
// Напишите программу, которая находит среднее значение элементов массива.

function task_3(x){
    let summ=0;
    x.forEach(element => {
        console.log(element)
        summ+=element
    });
    let result = summ/x.length
    console.log(result)
}


// 4
// Напишите программу, которая находит наибольший элемент в массиве.


function task_4(x){
    x.sort();
    console.log(x.at(-1));
}

// 5
// Напишите программу, которая находит наименьший элемент в массиве.

function task_5(x){
    x.sort();
    console.log(x.at(0));
}

// 6
// Напишите программу, которая находит индекс заданного элемента в массиве.


function task_6(x,element){
    let result = x.indexOf(element)
    console.log(result)
}

// task_6([1,2,3,4,5,6],5)


// 7
// Напишите программу, которая находит сумму элементов массива, находящихся на нечетных позициях.

function task_7(x){
    let result = 0
    x.forEach(element => {
        if(element%2==1){
            result+=element
        }
    });
    console.log(result)
}


// 8
// Напишите программу, которая находит сумму элементов массива, находящихся на четных позициях.
function task_8(x){
    let result = 0
    x.forEach(element => {
        if(element%2==0){
            result+=element
        }
    });
    console.log(result)
}



// 9
// Напишите программу, которая находит сумму элементов массива, которые больше заданного числа.
function task_9(x,element){
    let result=0;
    let newArr=x.slice(element,x.length)
    newArr.forEach(element => {
        result+=element
    });
    console.log(result)
}

// task_9([1,2,3,4,5,6],3)


// 10
// Напишите программу, которая находит количество элементов массива, которые меньше заданного числа.
function task_10(x,element){
    let newArr=x.slice(0,element)
    console.log(newArr.length)
}

// task_10([1,2,3,4,5,6],4)

// 11
// Напишите программу, которая находит все элементы массива, которые повторяются.

function task_11(x){
    let result=[]
    console.log(x)
    for(let item=0;item<x.length;item++){
        let find_index = x.indexOf(item,item)
        if(find_index>=0){
            result.push(x.splice(find_index,1))
        }
    }
    console.log(x)
    console.log(result)

}

// task_11([1,2,3,4,5,6,6,5,4])


// 12
// Напишите программу, которая находит все уникальные элементы массива.


function task_12(x){
    console.log(x)
    for(let item=0;item<x.length;item++){
        let find_index = x.indexOf(item,item)
        if(find_index>=0){
            x.splice(find_index,1)
        }
    }
    console.log(x)
}
// task_12([1,2,3,4,5,6,6,5,4])


// 13
// Напишите программу, которая удаляет заданный элемент из массива.

function task_13(x,element){
    let index = x.indexOf(element)
    x.splice(index,1)
    console.log(x)
}
// task_13([1,2,3,4,5,6,7,8,9],3)

// 14
// Напишите программу, которая сортирует элементы массива в порядке возрастания.

function task_14(x){
    x.sort()
    console.log(x)
}
// task_14([1,2,3,4,5,6,7,8,9])

// 15
// Напишите программу, которая сортирует элементы массива в порядке убывания.
function task_15(x){
    x.sort().reverse()
    console.log(x)
}
// task_15([1,2,3,4,5,6,7,8,9])

// 16
// Напишите программу, которая находит сумму элементов массива, которые находятся в заданном диапазоне.


function task_16(x,element_1,element_2){
    let result = 0
    let newArr = x.slice(element_1,element_2)
    console.log(newArr)
    newArr.forEach(element => {
        result+=element
    });
    console.log(result)
}
// task_16([1,2,3,4,5,6,7,8,9],2,6)

// 17
// Напишите программу, которая находит среднее значение элементов массива, которые находятся в заданном диапазоне.


function task_17(x,element_1,element_2){
    let summ = 0
    let newArr = x.slice(element_1,element_2)
    console.log(newArr)
    newArr.forEach(element => {
        summ+=element
    });
    let result = summ/newArr.length
    console.log(result)
}
// task_17([1,2,3,4,5,6,7,8,9],2,6)


// 18
// Напишите программу, которая находит наибольший общий делитель всех элементов массива.

function task_18(x){
    let result;
    let num = 1;
    x.forEach(element => {
        result = element/num
        num++
        console.log(result)
    });
}
// task_18([1,2,3,4,5,6,7,8,9])

// 19
// Напишите программу, которая находит разность между максимальным и минимальным элементами массива.
function task_19(x){
    x.sort();
    let element_1 = x[0]
    let element_2 = x.length
    console.log(element_2-element_1)
}
// task_19([1,2,3,4,5,6,7,8,9])

// 20
// Напишите программу, которая находит количество элементов массива, равных заданному числу.

function task_20(x,element){
    let newArr=x.slice(0,element)
    console.log(newArr)
    console.log(newArr.length)

}

// task_20([1,2,3,4,5,6,7,8,9],4)


// 21
// Напишите программу, которая заменяет все отрицательные элементы массива на ноль.

function task_21(x){
    x.forEach(element=>{
        if(element<0){
            let index = x.indexOf(element)
            x.splice(index,1,0)
        }
    })
    console.log(x)
}

// task_21([1,2,3,-4,-5,-6,-7,8,9])

// 22
// Напишите программу, которая заменяет все положительные элементы массива на заданное число.

function task_22(x,num){
    x.forEach(element=>{
        if(element>0){
            let index = x.indexOf(element)
            x.splice(index,1,num)
        }
    })
    console.log(x)
}

// task_22([1,-2,-3,4,5,6,-7,-8,9],5)

// 23
// Напишите программу, которая находит сумму элементов массива, которые находятся в заданных границах.

function task_23(x,element_1,element_2){
    let result = 0
    let newArr = x.slice(element_1,element_2)
    console.log(newArr)
    newArr.forEach(element => {
        result+=element
    });
    console.log(result)
}
// task_23([1,2,3,4,5,6,7,8,9],2,6)

// 24
// Напишите программу, которая удаляет все дубликаты из массива.

function task_24(x){
    console.log(x)
    for(let item=0;item<x.length;item++){
        let find_index = x.indexOf(item,item)
        if(find_index>=0){
            x.splice(find_index,1)
        }
    }
    console.log(x)
}
// task_24([1,2,3,4,5,6,6,5,4])

// 25
// Напишите программу, которая находит максимальное произведение двух элементов массива.


function task_25(x){
    x.sort();
    console.log(x.length*(x.length-1))
}
// task_25([1,2,3,4,5,6,7,8,9])

// 26
// Напишите программу, которая находит наибольшую сумму двух соседних элементов массива.

function task_26(x){
    x.sort();
    console.log(x.length+(x.length-1))
}
// task_26([1,2,3,4,5,6,7,8,9])

// 27
// Напишите программу, которая находит наибольшую сумму трех последовательных элементов массива.
function task_27(x){
    x.sort();
    console.log(x.length+(x.length-1)+(x.length-2))
}
// task_27([1,2,3,4,5,6,7,8,9])

// 28
// Напишите программу, которая находит наименьший элемент, который повторяется в массиве больше одного раза.

function task_28(x){
    console.log(x)
    let result = []
    for(let item=0;item<x.length;item++){
        let find_index = x.indexOf(item,item)
        if(find_index>=0){
            result+=x.splice(find_index,1)
        }
    }
    console.log(x)
    let newList = result.split('')
    newList.sort()
    console.log(newList[0])
}
// task_28([1,2,3,4,5,6,6,5,4])

// 29
// Напишите программу, которая находит сумму двух наименьших элементов массива.

function task_29(x){
    x.sort();
    console.log(x[0]+(x[1]))
}
// task_29([1,2,3,4,5,6,7,8,9])

// 30
// Напишите программу, которая находит сумму двух наибольших элементов массива.


function task_30(x){
    x.sort();
    console.log(x.length+(x.length-1))
}
// task_30([1,2,3,4,5,6,7,8,9])

// 31
// Напишите программу, которая находит все пары элементов массива, сумма которых равна заданному числу.


function task_31(x,num){
    x.forEach(element=>{
        if(element+element==num){
            console.log(element)
        }
    })
}

task_31([1,2,3,4,5,6,7,8,9],8)

