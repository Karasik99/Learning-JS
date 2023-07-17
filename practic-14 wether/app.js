
const ApiKey = '9c95068098054e47b4d170003230507'
let country = document.querySelector('#contry')
let temp = document.querySelector('#day-0-temp')
let desc = document.querySelector('#desc')
let wind = document.querySelector('#day-1-temp')
let humidity = document.querySelector('#day-2-temp')
let pressure_mb = document.querySelector('#day-3-temp')
let vis = document.querySelector('#day-4-temp')
let inputValue 
let input = document.querySelector('.input') 
input.addEventListener('keydown',getCityName) 


async function getWeather(a){ 
    let request = await fetch(`http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${a}&aqi=yes`) 
    let data = await request.json() 
    country.innerHTML = data.location.name
    temp.innerHTML = data.current.feelslike_c + '<sup>C</sup>'
    desc.innerHTML = data.current.condition.text
    wind.innerHTML = data.current.wind_kph + ' km/h'
    humidity.innerHTML = data.current.humidity + ' %'
    pressure_mb.innerHTML = data.current.pressure_mb + ' mb'
    vis.innerHTML = data.current.vis_km + ' km'
} 
 
 
function getCityName(event){ 
    if(event.keyCode){ 
        inputValue = input.value 
    } 
    getWeather(inputValue) 
}






