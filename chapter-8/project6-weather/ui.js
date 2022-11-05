class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.city;
        this.desc.textContent = weather.Weather;
        this.string.textContent = weather.TempC;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.RelativeHumidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.feelsLike}`;
        this.dewpoint.textContent = `DewPoint: ${weather.dewpoint}`;
        this.wind.textContent = `Wind: ${weather.WindMPH}`;
    }   
}