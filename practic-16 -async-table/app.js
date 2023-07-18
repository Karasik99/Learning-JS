let UsersUrl = 'https://jsonplaceholder.typicode.com/users'
let PostsUrl = 'https://jsonplaceholder.typicode.com/posts'


const content = document.querySelector('.content')
const about = document.querySelector('.info')
const container = document.querySelector('.container')


async function GetUsers(){
    let response = await fetch(UsersUrl)
    let data = await response.json()
    TransformationData(data)
}


function TransformationData(data){
    data.forEach(element => {
// /////////////////
        let block = document.createElement('tr')
        let cell = document.createElement('td')
        let name = document.createElement('td')
        let mail = document.createElement('td')
        let company = document.createElement('td')
        let address = document.createElement('td')
        let street = document.createElement('td')
        let suite = document.createElement('td')
        let phone = document.createElement('td')
        
// /////////////////
        cell.innerHTML = element.id
        name.innerHTML = element.name
        mail.innerHTML = element.email
        company.innerHTML = element.company.name
        address.innerHTML = element.address.city
        street.innerHTML = element.address.street
        suite.innerHTML = element.address.suite
        phone.innerHTML = element.phone
// /////////////////
        block.setAttribute('id',element.id)
        block.style.cursor = 'pointer'
        block.appendChild(cell)
        block.appendChild(name)
        block.appendChild(mail)
        block.appendChild(company)
        block.appendChild(address)
        block.appendChild(street)
        block.appendChild(suite)
        block.appendChild(phone)
// /////////////////
        content.appendChild(block)
        content.addEventListener('click',Tracking)
    });    
}


function Tracking(event){
    if(event.target.closest('td')){
        let user = event.target.parentNode
        let id = user.getAttribute('id')
        ShowInfo(id)
    }
}

async function ShowInfo(id){
        about.innerHTML = ''
// /////////////////
        let response = await fetch(UsersUrl+`?id=${id}`)
        let dataUser = await response.json()
// /////////////////
        dataUser.forEach(element => {
        let block = document.createElement('tr')
        block.setAttribute('id',id)
        let name = document.createElement('td')
        let username = document.createElement('td')
        let address = document.createElement('td')
        let mail = document.createElement('td')
        let phone = document.createElement('td')
        let web = document.createElement('td')
        let btn = document.createElement('button')
// /////////////////
        name.innerHTML = element.name
        username.innerHTML = element.username
        address.innerHTML = element.address.city
        mail.innerHTML = element.email
        phone.innerHTML = element.phone
        web.innerHTML = element.website
        btn.classList.add('info-btn')
        btn.innerHTML = 'Show posts'
// /////////////////
        block.appendChild(name)
        block.appendChild(username)
        block.appendChild(address)
        block.appendChild(mail)
        block.appendChild(phone)
        block.appendChild(web)
        block.appendChild(btn)

        about.appendChild(block)
// /////////////////
        btn.addEventListener('click',ShowPosts)
        });
}


async function ShowPosts(event){
// /////////////////
    let userId = event.target.parentNode.getAttribute('id')
    let response = await fetch(PostsUrl+`?userId=${userId}`)
    let data = await response.json()
    let posts = document.createElement('div')
    posts.classList.add('posts')
// /////////////////
    let title = document.createElement('p')
    title.classList.add('posts-title')
    title.innerHTML = 'Users Posts'
    posts.appendChild(title)
// /////////////////
    let cards = document.createElement('div')
    cards.classList.add('cards')
    posts.appendChild(cards)
// /////////////////
    data.forEach(element => {

        let card = document.createElement('div')
        card.classList.add('card')
        cards.appendChild(card)

        let cardtitle = document.createElement('p')
        cardtitle.classList.add('card-title')
        cardtitle.innerHTML = element.title
        card.appendChild(cardtitle)

        let cardtext = document.createElement('p')
        cardtext.classList.add('card-text')
        cardtext.innerHTML = element.body
        card.appendChild(cardtext)

        container.appendChild(posts)
    });
// /////////////////

}

document.body.addEventListener('click',(event)=>{
    if(!event.target.closest('.info-btn')){
        container.innerHTML = ''
    }
})


GetUsers()




