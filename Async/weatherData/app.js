const weather = document.querySelector('#weather');
const baseUrl = "https://handlers.education.launchcode.org/static/weather.json";

(function getWeather(url){
    fetch(url)
    .then(res => res.json())
    .then(weatherInfo => {
        console.log(weatherInfo);
        weather.innerHTML = `
            <h2>It's ${weatherInfo.status} today.</h2>
        `;
    })
    .catch(err => weather.innerHTML = err)
})(baseUrl)

// weather.innerHTML = 