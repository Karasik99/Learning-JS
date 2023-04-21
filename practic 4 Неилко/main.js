let simple_list = [1,2,3,4,5,6,7,8,9]





// 1

function task_1(x){
    console.log(x)
}


// 2
function task_2(x){
    for(let item = 0; item<=x.length; item++){
        if(item%2==0){
            console.log(item)
        }
    }
}

// 3
function task_3(x){
    let result = 0
    for(let item = 0; item<=x.length; item++){
        result+=item
    }
    console.log(result)
}


// 4
function task_4(x){
    x.sort
    console.log(x.length)
}
// x.at(-1)



function task_5(x,index,elem){
    x.splice(index,0,elem)
    console.log(x)
}

// task_5(simple_list,4,57)


function task_6(x,index){
    x.splice(index,1)
    console.log(x)
}

// task_6(simple_list,4)

let simple_list_2 = [1,2,3,4,5,6]


function task_7(list_1,list_2){
    console.log(list_1)
    console.log(list_2)
    let corporate_list = list_1.concat(list_2)
    console.log('объединенный массив: \n\n '+corporate_list+'\n\n')
    let res = []
    for(let item = 0; item<corporate_list.length;item++){
        if(corporate_list.indexOf(item)>=0){
            res.push(item)
        }
    }
    console.log('чистый сет: \n\n '+res)
}


function task_8(list_1,list_2){
    console.log(list_1)
    console.log(list_2)
    let corporate_list = list_1.concat(list_2)
    console.log('объединенный массив: \n\n '+corporate_list+'\n\n')
    let res = []
    for(let item = 0; item<corporate_list.length;item++){
        if(corporate_list.indexOf(item)<0){
            res.push(corporate_list[item])
        }
    }
    console.log('массив повторений: \n\n '+res)
}


function task_9(list_1,list_2){
    console.log(list_1)
    console.log(list_2)
    let res = []
    for(let item = 0; item<list_1.length;item++){
      if(list_2.indexOf(list_1[item])<0){
        res.push(list_1[item])
      }
    }
    console.log('Элементы которые отсутствуют в основном списке: '+res)
}


let simple_fruits =['apple','orange','lemon','banan','kivi']

function task_10(fruits){
    fruits.sort()
    for(let item = 0;item<fruits.length;item++){
        task_10_1(fruits[item])
    }
}

let simple = document.querySelectorAll('li')
function task_10_1(fruit){
    simple.data = fruit
    console.log(simple)
}

task_10(simple_fruits)
