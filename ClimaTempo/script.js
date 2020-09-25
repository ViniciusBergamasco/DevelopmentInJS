async function SearshWeather(city){
  const apiKey = 'b1af95dd52c314fafd6dbb6a7c298ac8';
  const units = 'metric';

  const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
  return response.json()
}

function ShowWeatherInfo(info){
    document.getElementById('city-name').innerText = info.name;
    document.getElementById('temperature').innerText = info.main.temp + '°C';
    document.getElementById('humidity').innerText = info.main.humidity + '%';
    document.getElementById('wind-speed').innerText = info.wind.speed + 'Km/h';
    document.getElementById('contry-flag').scr = `https://www.countryflags.io/${info.sys.country}/flat/64.png`;
}

switch(info.weather[0].main){
    case 'Clear':
        document.getElementById('weather-animation').scr = './animations/day.svg';
        document.style.backgroundImage = 'url(./images/clear.jpg)';
        document.getElementById('weather-discription').innerText = 'Céu limpo';
    break;
    case 'Clounds':
        document.getElementById('weather-animation').scr = './animations/cloudy.svg';
        document.style.backgroundImage = 'url(./images/clouds.jpg)';
        document.getElementById('weather-discription') = 'Céu nublado';
    break;
    case 'Rain':
    case 'Mist':
        document.getElementById('weather-animation').scr = './animations/rainy.svg';
        document.style.backgroundImage = 'url(./images/rain.jpg)'
        document.getElementById('weather-discription') = 'Chuva';
    break;
    case 'Thunderstorm':
        document.getElementById('weather-animation').scr = './animations/thunder.svg';
        document.style.backgroundImage = 'url(./images/storm.jpg)';
        document.getElementById('weather-discription') = 'Trovões';
    break;
    }
