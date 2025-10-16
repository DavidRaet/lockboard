import { useEffect, useState } from "react"
import styles from './WeatherWidget.module.css'
import MiniDayIcon from "./MiniDayIcon"
import { formatWeather, fetchWeatherDataByCity } from "../../utils/weatherAPI"


const WeatherWidget = ( ) => {
    const cities = ['Poughkeepsie', 'New York', 'Tokyo', 'Nagoya']
    const [weather, setWeather] = useState({})
    const [selectedCity, setSelectedCity] = useState('Poughkeepsie')
    const [units, setUnits] = useState('metric')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const weatherData = fetchWeatherDataByCity(selectedCity)
    console.log(weatherData)

    return (
        <div className={styles.weatherWidget}>
            {/* {loading && <div>Loading weather...</div> }
            {error && <div>Error:{error}</div>}
            <div className={styles.header}>
            <h3 className={styles.name}>{weather.name}</h3>
            <h3>{formats.formattedDate}</h3>                
            </div>
            <MiniDayIcon
            day={formats.day}
            icon={weather.icon}
            temp_min={weather.daily.temp.max}
            temp_max={weather.daily.temp.min}
            />
            <p className={styles.description}>Today we have: {weather.weather[0].description}</p>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric') }>
                {units === 'metric' ? '°C' : '°F'}
            </button> */}
        </div>
    )
}

export default WeatherWidget