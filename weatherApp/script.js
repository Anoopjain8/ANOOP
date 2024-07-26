const apiKey = "c9524698f9399abfb2312d4f20c3ff1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await response.jason();
        // typeError: response.jason() is not a function.
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
