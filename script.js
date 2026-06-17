const apiKey = '9b2095656df4d07b66e67fe713cf4f44';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    console.log("Searching for:", city); // ഇത് കൺസോളിൽ വരുന്നുണ്ടോ എന്ന് നോക്കൂ

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // ഡാറ്റ കിട്ടുന്നുണ്ടോ എന്ന് ഇവിടെ അറിയാം
            if (data.cod === 200) {
                const weatherResult = document.getElementById('weatherResult');
                weatherResult.innerHTML = `
                    <h2 class="text-xl font-bold">${data.name}</h2>
                    <p class="text-4xl font-bold my-2">${data.main.temp}°C</p>
                    <p class="capitalize">${data.weather[0].description}</p>
                `;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error:', error));
});
