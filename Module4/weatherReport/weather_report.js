// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api key : dbf67b330b5a7fda43ce384610451139

function showweatherDetails(event) {
    const city = document.getElementById('city').value;
    const apiKey = 'dbf67b330b5a7fda43ce384610451139'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    event.preventDefault();
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données météo :', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Échec de la récupération des données météo. Veuillez réessayer.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );