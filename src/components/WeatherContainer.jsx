import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      // transformacion a celsius
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp} °C`;
    } else {
      // transformacion a fahrenheit
      const fahrenheitTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${fahrenheitTemp} °F`;
    }
  };

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius);
    
  };

  console.log(weather);
  return (
    <section className="text-center gap-5 grid ">
      <h3 className="text-3xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto] ">
        {/* seccion superior */}
        <article className="bg-gradient-to-r from-[#5836B3] to-[#362A84] rounded-2xl grid grid-cols-2 items-center p-3 drop-shadow-2xl w-[409px] h-[280px]">
          <h4 className="col-span-2 text-lg capitalize">
            {weather.weather[0].description}
          </h4>
          <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
          <picture>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </picture>
        </article>

        {/* seccion inferior */}

        <article className="grid grid-cols-3 justify-items-center bg-gradient-to-r from-[#5836B3] to-[#362A84] rounded-2xl p-3 sm:grid-cols-1 drop-shadow-2xl">
          <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed} />
          <WeatherStat
            icon="/humidity.png"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStat
            icon="/pressure.png"
            unit="hPa"
            value={weather.main.pressure}
          />
        </article>
      </div>

      <button onClick={handleChangeUnit} className="bg-[#7D69F1] h-10 rounded-2xl drop-shadow-2xl">C° y F°</button>
    </section>
  );
};
export default WeatherContainer;
