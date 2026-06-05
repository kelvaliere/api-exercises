const code = document.getElementById("zipcode").value;

function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${code}&appid=99b85a4e52c01063c777a7f044560c89&units=imperial`,
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("text").textContent =
        "it is " +
        data.main.temp +
        " degrees fahrenheit in " +
        data.name +
        ", " +
        `${code}`;
    });
}
