const apiKey = '9b2095656df4d07b66e67fe713cf4f44';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    
    
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            if (data.cod === 200 || data.cod === '200') {
                const weatherResult = document.getElementById('weatherResult');
                weatherResult.innerHTML = `
                    <div class="weather-info">
                        <h2 class="text-xl font-bold">${data.name}, ${data.sys.country}</h2>
                        <p class="text-4xl font-bold my-2">${Math.round(data.main.temp)}°C</p>
                        <p class="capitalize">${data.weather[0].description}</p>
                        <p class="text-sm mt-1">Humidity: ${data.main.humidity}%</p>
                    </div>
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p class="text-red-500">City not found!</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Something went wrong. Please try again.");
        });
});