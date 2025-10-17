import { useEffect, useState } from "react"
import styles from './WeatherWidget.module.css'
import MiniDayIcon from "./MiniDayIcon"
import { formatWeather, fetchWeatherDataByCity } from "../../utils/weatherAPI"


const WeatherWidget = ( ) => {
    const cities = ['Poughkeepsie', 'New York', 'Tokyo', 'Nagoya']
    const [weather, setWeather] = useState(null)
    const [selectedCity, setSelectedCity] = useState('Nagoya')
    const [units, setUnits] = useState('metric')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchWeather = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await fetchWeatherDataByCity(selectedCity, units)
            setWeather(data)
            // console.log('Running data', data)
        } catch (err){
            console.error('Failed to fetch weather', err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchWeather()
    }, [selectedCity, units])

    if (loading) return <div>Loading...</div>
    if (error) return <div className={styles.error}>Error..</div>
    if (!weather) return null 

    console.log('Weather data', weather)
    const formatted = formatWeather(weather)

    
    return (
        <div className={styles.weatherWidget}>
            <div className={styles.header}>
            <h3 className={styles.name}>{weather.name}</h3>
            <h3>{formatted.date}</h3>                
            </div>
            <MiniDayIcon
            day={formatted.day}
            icon={formatted.iconUrl}
            temp_min={formatted.temp_min}
            temp_max={formatted.temp_max}
            />
            <p className={styles.description}>Today we have: {formatted.description}</p>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric') }>
                {units === 'metric' ? '°C' : '°F'}
            </button>
        </div>
    )
}

export default WeatherWidget