"use client"

import React, { useState, useEffect } from "react"
import {
  Search, MapPin, Thermometer, Droplets, Wind, Eye, Gauge,
  Sun, Cloud, CloudRain, Sunrise, Sunset
} from "lucide-react"

const Input = (props) => (
  <input {...props} className={`px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:bg-white/30 ${props.className}`} />
)

const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 rounded border text-white bg-white/20 hover:bg-white/30 border-white/30 flex items-center gap-1">
    {children}
  </button>
)

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow p-4 ${className}`}>{children}</div>
)

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("Mohali")
  const [currentWeather, setCurrentWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`)
      const data = await res.json()

      const current = data.current_condition[0]
      const astronomy = data.weather[0].astronomy[0]

      setCurrentWeather({
        city,
        temperature: parseInt(current.temp_C),
        condition: current.weatherDesc[0].value,
        description: current.weatherDesc[0].value,
        humidity: parseInt(current.humidity),
        windSpeed: parseFloat(current.windspeedKmph),
        visibility: parseFloat(current.visibility),
        pressure: parseInt(current.pressure),
        feelsLike: parseInt(current.FeelsLikeC),
        uvIndex: parseInt(current.uvIndex || 0),
        sunrise: astronomy.sunrise,
        sunset: astronomy.sunset,
      })
    } catch (err) {
      console.error("Failed to fetch weather:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    setLoading(true)
    fetchWeather(searchQuery)
  }

  useEffect(() => {
    fetchWeather("Mohali")
  }, [])

  const getWeatherIcon = (condition) => {
    const lower = condition.toLowerCase()
    if (lower.includes("rain")) return CloudRain
    if (lower.includes("cloud")) return Cloud
    if (lower.includes("sun") || lower.includes("clear")) return Sun
    return Thermometer
  }

  const WeatherIcon = currentWeather ? getWeatherIcon(currentWeather.condition) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-6 text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Weather App</h1>

        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 h-4 w-4" />
            <Input
              placeholder="Enter city"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Button type="submit">
            <Search className="h-4 w-4" /> Search
          </Button>
        </form>

        {loading && <p className="text-center text-blue-100">Loading...</p>}

        {currentWeather && (
          <Card>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {currentWeather.city}
                </h2>
                <p className="text-blue-100">{currentWeather.description}</p>
              </div>
              <div className="text-sm bg-white/20 px-3 py-1 rounded">{currentWeather.condition}</div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              {WeatherIcon && <WeatherIcon className="h-12 w-12 text-yellow-300" />}
              <div>
                <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
                <div className="text-blue-100">Feels like {currentWeather.feelsLike}°C</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat icon={<Droplets />} label="Humidity" value={`${currentWeather.humidity}%`} />
              <Stat icon={<Wind />} label="Wind" value={`${currentWeather.windSpeed} km/h`} />
              <Stat icon={<Eye />} label="Visibility" value={`${currentWeather.visibility} km`} />
              <Stat icon={<Gauge />} label="Pressure" value={`${currentWeather.pressure} hPa`} />
              <Stat icon={<Sunrise />} label="Sunrise" value={currentWeather.sunrise} />
              <Stat icon={<Sunset />} label="Sunset" value={currentWeather.sunset} />
              <Stat icon={<Sun />} label="UV Index" value={currentWeather.uvIndex} />
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

const Stat = ({ icon, label, value }) => (
  <div className="bg-white/10 rounded-lg p-3 text-center">
    <div className="text-blue-200 mb-1">{icon}</div>
    <div className="text-sm text-blue-100">{label}</div>
    <div className="text-lg font-bold text-white">{value}</div>
  </div>
)
