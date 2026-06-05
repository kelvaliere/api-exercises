# Weather - SCE's New Meteorology Service
- Develop a web page using React to show the weather for a given zip code entered by the user. The webpage should allow the user to enter a zip code and submit it, and after sometime, render the zip code, city name, and temperature.

- **Hint 1:** You can use [openweathermap.com](https://openweathermap.com) with the API key
```
99b85a4e52c01063c777a7f044560c89
```
- **Hint 2:** You can use Google for help, but not to copy and paste any code.

## gameplan
-  a webpage with 1 field and submit
	- `zip code`
	- submit button

```html
https://api.openweathermap.org/data/2.5/weather?zip=95112&appid=99b85a4e52c01063c777a7f044560c89&units=imperial
```

#### json from that link ^^^
```json
{
  "coord": {
    "lon": -121.887,
    "lat": 37.3476
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 302.69,
    "feels_like": 302.22,
    "temp_min": 299.81,
    "temp_max": 304.75,
    "pressure": 1008,
    "humidity": 39,
    "sea_level": 1008,
    "grnd_level": 980
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.36,
    "deg": 293,
    "gust": 7.15
  },
  "clouds": {
    "all": 2
  },
  "dt": 1780699818,
  "sys": {
    "type": 2,
    "id": 2012373,
    "country": "US",
    "sunrise": 1780663647,
    "sunset": 1780716300
  },
  "timezone": -25200,
  "id": 0,
  "name": "San Jose",
  "cod": 200
}
```
