// 1   
function task_one(){
    let numb = +prompt('Введите число');
    let count = 0;
    while(count<numb){
    let result = ''+'#'
    count++;
    console.log(result)
}
}


// 2
function task_two(){
    let numb = +prompt('Введите число');
    let count = 0;
    while(numb>=count){
    console.log(numb);
    numb--;
    }
}


// 3
function task_three(){
    let numb = +prompt('Введите число');
    let step = +prompt('Введите степень');
    let count = 1;
    while(0<count){
        let result = numb**step;
        console.log(result);
        count--;
    }
}


// 4
function task_four(){
    let number_one = +prompt('Введите первое число');
    let number_two = +prompt('Введите второе число');
    let count = 1;
    let numb_one_count = []
    let number_two_count = []
    while(0<count){
    for (let item=1000;0<item;item--){
        if (number_one%item==0){
            let result = item+'';
            numb_one_count.push(result)
        }
        if (number_two%item==0){
            let result = item+'';
            number_two_count.push(result)
        }
    }
    console.log(numb_one_count)
    console.log(number_two_count)
    count--
    }
}


// 5
function task_five(){
    let number_one = +prompt('Введите число');
    let sum = 1;
    while(0<number_one){
        sum*=number_one;
        number_one--;
    }
    console.log(sum)
}


// 6
function task_six(){
    let count=1
    do{
        let number_one = +prompt('Сколько будет 2+2*2');
        if(number_one == 6){
            count--
            alert('Верно')
        }
    }while(0<count)
}


// 7
function task_seven(){
    let numb = 1000; item = 50;count = 0;
    do{
        numb = numb/2;
        count+=1;
    }while(item<=numb)
    console.log('Количество делений составляет: '+ count)
}


// 8
function task_eight(){
    let numb = +prompt('Введите число');
    for(let item=0;item<=100;item++){
        if (item%numb==0){
            console.log(item)
        }
    }
}


// 9
function task_nine(){
    let number_one = +prompt('Введите первое число');
    let number_two = +prompt('Введите второе число');
    if(number_one<number_two){
        for(;number_one<=number_two;number_one++){
            if (number_one%4==0){
                console.log(number_one)
            }
    }
    }
    else if(number_one==number_two){
        console.log('Неверный диапазон')
    }
    else{
        for(;number_two<=number_one;number_two++){
            if (number_two%4==0){
                console.log(number_two)
            }
    }
    }
}


// 10
function task_nine(){
    // Насчет 10 под вопросом
    let number_one = +prompt('Введите число');
    for(let item=1;item<=number_one;item++){
        console.log(item)
        if(number_one%item==1){
            console.log('Число натуральное')
        }
        else{
            console.log('Число не натуральное')
        }
    }
}