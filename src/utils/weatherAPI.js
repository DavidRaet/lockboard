const API_KEY = import.meta.env.VITE_WEATHER_API_KEY


export async function fetchWeatherDataByCity(city, units ='metric'){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`);
    const rawText = await response.text();
    console.log('Raw API Response: ', rawText)
    // if (!response.ok){
    //     const error = await response.json();
    //     throw new Error(error.message || 'Failed to fetch weather');
    // }
    // return response.json();
}

export function formatWeather(apiData) {
    const date = new Date(apiData.list.dt * 1000);

    return {
        name: apiData.city.name,
        temp_min: apiData.main.min,
        temp_max: apiData.main.max,
        description: apiData.weather[0].description,
        icon: apiData.weather[0].icon,
        day: date.toLocaleDateString('en-US', {weekday: 'short'}),
        date: date.toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'})
    }
}

