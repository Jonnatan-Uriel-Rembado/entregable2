import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    const API_KEY = "ff30a9f16bf799f59f95c67c5f204bb1";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-gradient-to-b from-[#2F2958] via-[#53388F] to-[#2F2958] text-white px-2'>
  
      {weather === null ? (
        <h3 className="text-2xl">Weather App...</h3>
      ) : (
        <WeatherContainer weather={weather} />
      )}
    </main>
  );
}

export default App;
