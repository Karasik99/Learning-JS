


// async function getCoctails(){
//   let CUSTOMURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
//   try{
//     let RESPONSE = await fetch(CUSTOMURL);
//     let DATA = await RESPONSE.json()
//     DATA.drinks.forEach(element => {
//       console.log(element)
//     });
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }

///////////////////////////////////////////////////////////////////////


// TASKS............

// Woody Martin
// https://jsonplaceholder.typicode.com/


// у вас есть список пользователей, нужно получить информацию о каждом пользователе и отрендерить ее у себя на странице.Информация должна быть о имени пользователя, его фамилии, адресе проживания, номере телефона и вебсайте, в качестве фотографии можно использовать фотографии из интернета
// https://jsonplaceholder.typicode.com/users


// У вас есть список из постов, нужно получить информацию о каждом посте и на странице отрендерить в виже карточек имя того, кто написал пост,сверху слева, справа написать его Email, а снизу написать уже непосредственно сам пост.К заданию подойти креативно.
// https://jsonplaceholder.typicode.com/posts


// У вас есть список из фотографий, нужно получить информацию о названии фотографии и url фотографии, отрендерить на странице.К заданию подойти креативно.
// https://jsonplaceholder.typicode.com/photos



// У вас есть список из комментариев, нужно получить информацию о каждом посте и на странице отрендерить в виже карточек имя того, кто написал пост,сверху слева, справа написать его Email, а снизу написать уже непосредственно сам пост.К заданию подойти креативно.
// https://jsonplaceholder.typicode.com/comment

// У вас есть список дел, нужно на странице отобразить его в виде списка, где будет стоять имя дела слева, и галочка от том что дело выполнено, если нет, тогда темный пустой квадратик
// https://jsonplaceholder.typicode.com/todos
///////////////////////////////////////////////////////////////////////////////////////////////////

let basic_url = 'https://jsonplaceholder.typicode.com';


async function getUsers(){
  let users_url = `${basic_url}/users`
  try{
    let response_request = await fetch(users_url)
    let data_users = await response_request.json()

    data_users.forEach(element => {
      user_firstname = element.name.split(' ')[0]
      user_lastname = element.name.split(' ')[1]
      user_address = element.address.street + ' , ' + element.address.suite
      user_tel = element.phone
      user_web = element.website
      element.photo = '/human.jpg'
      CreateUser(user_firstname,user_lastname,user_address,user_tel,user_web,element.photo)
    });

  }
  catch(error){
    console.log(error.message)
  }
}


function CreateUser(user_firstname,user_lastname,user_address,user_tel,user_web,photo){
  let cards = document.querySelector('.users-cards')
  
  let card = document.createElement('div')
  card.classList.add('user-card')
  
  let image = document.createElement('img')
  image.classList.add('user-img')
  image.src = photo
  card.appendChild(image)
  cards.appendChild(card)

  let content = document.createElement('div')
  content.classList.add('content')

  let firstname = document.createElement('p')
  firstname.classList.add('user')
  firstname.classList.add('user-firstname')
  firstname.textContent = user_firstname
  content.appendChild(firstname)

  let lastname = document.createElement('p')
  lastname.classList.add('user')
  lastname.classList.add('user-lastname')
  lastname.textContent = user_lastname
  content.appendChild(lastname)

  let address = document.createElement('address')
  address.classList.add('user')
  address.classList.add('user-address')
  address.textContent = user_address
  content.appendChild(address)

  let tel = document.createElement('p')
  tel.classList.add('user')
  tel.classList.add('user-tel')
  tel.textContent = user_tel
  content.appendChild(tel)

  let web = document.createElement('p')
  web.classList.add('user')
  web.classList.add('user-web')
  web.textContent = user_web

  content.appendChild(web)
  card.appendChild(content)
}


getUsers()
