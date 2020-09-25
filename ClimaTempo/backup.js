async function SearchWeather(city){
    const apiKey ='b1af95dd52c314fafd6dbb6a7c298ac8';
    const units = 'metric';

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);

    return response.json();
}

function showWeatherInfo(info){
    document.getElementById('city-name').innerText = info.name;
    document.getElementById('temperature').innerText = Math.trunc(info.main.temp) + 'º';
    document.getElementById('humidity').innerText = info.main.humidity + '%';
    document.getElementById('wind-speed').innerText = info.wind.speed + ' km/h';
    document.getElementById('country-flag').src = `https://www.countryflags.io/${info.sys.country}/flat/64.png`;

    switch(info.weather[0].main){
        case 'Clear':
            document.getElementById('weather-animation').src = './animations/day.svg';
            document.body.style.backgroundImage = 'url(./images/clear.jpg)';
            document.getElementById('weather-description').innerText = 'Tempo Aberto';
            break;
        case 'Clouds':
            document.getElementById('weather-animation').src = './animations/cloudy.svg';
            document.body.style.backgroundImage = 'url(./images/clouds.jpg)';
            document.getElementById('weather-description').innerText = 'Tempo com Nuvens';
            break;
        case 'Rain':
        case 'Mist':
            document.getElementById('weather-animation').src = './animations/rainy.svg';
            document.body.style.backgroundImage = 'url(./images/rain.jpg)';
            document.getElementById('weather-description').innerText = 'Tempo com Chuva';
            break;
        case 'Thunderstorm':
            document.getElementById('weather-animation').src = './animations/thunder.svg';
            document.body.style.backgroundImage = 'url(./images/storm.jpg)';
            document.getElementById('weather-description').innerText = 'Raios e Trovões';
            break;
        case 'Snow':
            document.getElementById('weather-animation').src = './animations/snowy.svg';
            document.body.style.backgroundImage = 'url(./images/snow.jpg)';
            document.getElementById('weather-description').innerText = 'Nevando';
            break;
    }
}

async function handlerSearch(city){
   const info = await SearchWeather(city);
   showWeatherInfo(info);
}

document.getElementById('button-search')
.addEventListener('click', ()=>{
    const city = document.getElementById('input-search').value;
    
   
    if(city)
        handlerSearch(city);
    else
        alert('Digite o nome da cidade!');
});