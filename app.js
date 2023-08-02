const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e3534552d7msh92cf9a723daeac4p1b7f67jsn7665092b36a8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            if (response.cloud_pct >= 75) {
                const anchor = document.getElementById('cloud');
                anchor.href = 'cloud.html';
            }
            if (response.cloud_pct < 75) {
                const anchor = document.getElementById('cloud');
                anchor.href = 'nice.html';
            }
            cloud_pct2.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            if (response.temp >= 32) {
                const anchor = document.getElementById('achor');
                anchor.href = 'fire.html';
            }
            if (response.temp < 32 && response.temp >= 22) {
                const anchor = document.getElementById('achor');
                anchor.href = 'nice.html';
            }
            if (response.temp < 22) {
                const anchor = document.getElementById('achor');
                anchor.href = 'cold.html';
            }
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            wind_degrees.innerHTML = response.wind_degrees
            wind = response.wind_speed
            wind_speed.innerHTML = (wind * 3600) / 1000;
            const windi = (wind * 3600) / 1000;
            if (windi >= 30) {
                const anchor = document.getElementById('wind');
                anchor.href = 'storm.html';
            }
            if (windi < 30 && windi >= 20) {
                const anchor = document.getElementById('wind');
                anchor.href = 'wind.html';
            }
            if (windi < 20) {
                const anchor = document.getElementById('wind');
                anchor.href = 'nice.html';
            }
            wind2 = response.wind_speed
            wind_speed2.innerHTML = (wind2 * 3600) / 1000;
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})
getweather("Jaipur");