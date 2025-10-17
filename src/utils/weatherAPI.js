const API_KEY = import.meta.env.VITE_WEATHER_API_KEY


export async function fetchWeatherDataByCity(city, units ='metric'){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`);
    const data = await response.json();
    if (!response.ok){
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch weather');
    }
    return data;
}

export function formatWeather(weather) {
    const date = new Date(weather.dt * 1000)

    return {
        name: weather.name,
        temp_min: weather.main.temp_min,
        temp_max: weather.main.temp_max,
        description: weather.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        day: date.toLocaleDateString('en-US', {weekday: 'short'}),
        date: date.toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'})
    }
}