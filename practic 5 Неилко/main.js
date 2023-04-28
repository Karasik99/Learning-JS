

let simple_list = [1,2,3,4,5,6,7,8,9,10,11]
let simple_list_2 = [1,2,3,4,5,6]



// 1
function getName(x){
    console.log(x)
}

// 2
function getODD(y){
    for(let item = 0;item<=y.length;item++){
        if(y[item]%2==1){
            console.log(item)
        }
    }
}

//3
function getSumm(y){
    let result = 0;
    for(let item = 0;item<=y.length;item++){
        result = result+item
    }
    console.log(result)
}

// 4
function getMax(y){
    console.log(y.at(-1))
}


// 5
function addMass(massiv,index,numb){
    let result = []
        let left_side = massiv.slice(0,index)
        let right_side = massiv.slice(index,massiv.at(-1))
        console.log(left_side)
        console.log(right_side)
        result = result.concat(left_side + ','+numb + ',' + right_side )
        console.log(result)

}

// 6
function Dell(massiv,index,num){
    massiv[index] = num
    console.log(massiv)
    let result = []
    massiv[index] = massiv.slice(index,index)
    massiv[index] = index+1
    console.log(massiv)
}



// 7
function listList(list_1,list_2){
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


listList([1,2,3,4,5,7,7,7,7],[1,2,3,4,5,7,7,7,7])
