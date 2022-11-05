/**
 * API website
 * https://rapidapi.com/interzoid/api/us-weather-by-city
 */

class Weather {
    constructor(city, state){
        this.apiKey = '';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const options = {
	        method: 'GET',
	        headers: {
                'X-RapidAPI-Key': '12e203095fmshec22cb75842f250p102f4ajsn8275868aa186',
                'X-RapidAPI-Host': 'us-weather-by-city.p.rapidapi.com'
	        }
        };
        const response = await fetch(`https://us-weather-by-city.p.rapidapi.com/getweather?city=${this.city}&state=${this.state}`, options);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}