const apiKey = "22c6f934bd2fbf3d3b7e61bee8a520be";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => "http://api.openweathermap.org/geo/1.0/zip?zip=07002,PA-8&22c6f934bd2fbf3d3b7e61bee8a520be={API key}";

async function getWeatherByLocation(city){

    const resp = await fetch(url(city),{
        origin: "cros"});
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function addWeatherToPage(data){
    const temp = Ktoc(data.main.temp);

    const weather = document.createElement("div")
    weather.classList.add("weather");

    weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</small>`;

    //cleanup

    main.innerHTML = "";
    main.appendChild(weather);
};

function Ktoc(K){
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherByLocation(city)
    }
});