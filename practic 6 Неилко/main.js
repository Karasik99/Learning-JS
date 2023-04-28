

let simpleList = [{
    name:'banan',
    count:10,
    bought: true,
    },
    {
    name:'apple',
    count:5,
    bought: false,
    },
    {
    name:'strawberry',
    count:3,
    bought: false,
    },
    {
    name:'tomato',
    count:6,
    bought: true,
    },
    {
    name:'sousage',
    count:4,
    bought: true,
    },
    {
    name:'eggs',
    count:2,
    bought: false,
    }]


// Задание 1

// 1
// Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.

var result1 = []

function Conclusion(list){
    list.forEach(element => {
        if(element.bought==false){
            result1.push(element)
        }
    });
    list.forEach(element => {
        if(element.bought==true){
            result1.push(element)
        }
    });
    console.log(result1)
}


// 2
// Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо 
// увеличивать количество в существующей покупке,
// а не добавлять новую. 

function AddProduct(listProduct,productName,productCount,productBought=false){
    let answer = []
    listProduct.forEach(element => {
        findElement = element.name.indexOf(productName)
        if(findElement>=0){
            answer.push(findElement)
        }
    });
        if(answer[0]>=0){
            listProduct.forEach(element => {
                if(element.name == productName){
                    var indexElement = listProduct.indexOf(element)
                    let findProduct = listProduct[indexElement].count+productCount
                    listProduct[indexElement].count = findProduct
                }
            });
        }
        else{
            let product = {
                name:productName,
                count:productCount,
                bought:productBought,
            }
            listProduct.push(product)
        }
        console.log(listProduct)
    }

// AddProduct(simpleList,'cherry',100,false)
// AddProduct(simpleList,'apple',100,false)



// 3
// Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

function BuyProduct(listProduct,productName,productBought=true){
    let answer = []
    listProduct.forEach(element => {
        findElement = element.name.indexOf(productName)
        if(findElement>=0){
            answer.push(findElement)
        }
    });
        if(answer[0]>=0){
            listProduct.forEach(element => {
                if(element.name == productName){
                    var indexElement = listProduct.indexOf(element)
                    let findProduct = listProduct[indexElement].bought=productBought
                    listProduct[indexElement].bought = findProduct
                }
            });
        }
        console.log(listProduct)
    }
// BuyProduct(simpleList,'strawberry')
// BuyProduct(simpleList,'apple')
// BuyProduct(simpleList,'eggs')


// Задание 2

// 1
// Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.


let CheckList = [
    {name:'Eggs',
    price:3.25,
    count: 5,
    },
    {name:'Milk',
    price:1.68,
    count: 2,
    },
    {name:'Bread',
    price:0.75,
    count: 1,
    },
    {name:'apple',
    price:0.90,
    count: 7,
    },
    {name:'Snikers',
    price:1.75,
    count: 2,
    }]

// 1,2,3,4

function ShowCheck(CheckList){
    console.log('ООО Корона Табак Инвест, Магазин Соседи'+'\n'+
    'Кассир Никитосик')
    let res = 0
    let MaxSumm = []
    CheckList.forEach(element => {
        console.log('Наименование товара: '+element.name+'\n'
        +'Цена за единицу товара: '+element.price +' BYN'+'\n'
        +'Количество : ' + element.count + '\n'
        +'Итоговая стоимость: '+ element.count*element.price +' BYN'+'\n')
        res += element.count*element.price
        MaxSumm.push(element.count*element.price)
    });
    MaxSumm.sort((a, b) => a - b).reverse();  // Почему- то at(-1) не работает пришлось вертеть массив
    console.log('\n'+ 'Самая дорогая покупка вышла на сумму: '+ MaxSumm[0]+ ' BYN')
    console.log('\n'+'Средняя стоимость товаров в чеке : ' + res/MaxSumm.length + ' BYN')
    console.log('\n'+'К оплате : ' + res + ' BYN')
}

ShowCheck(CheckList)










































