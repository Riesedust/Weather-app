import "./App.css";
import Card from "./components/Card";
import CardDays from "./components/CardDays";
import CardHour from "./components/CardHour";
import { useState } from "react";

function App() {
  let isDay = 1;
  const [error, setError] = useState(false);
  const [render, setRender] = useState(false);
  const [city, setCity] = useState([]);
  const [cityHour, setCityHour] = useState([]);
  const [cityDays, setCityDays] = useState([]);
  const [newCity, setNewCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=2fc2b8af08884e2098a125135231912&q=${newCity}&days=3&aqi=no&alerts=no
      `;
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        try {
          setCity([response]);
          handleState([response]);
          setRender(true);
          setError(false);
        } catch (error) {
          handleErr();
          setError(true);
        }
      });
  }

  function handleErr() {
    setCity([...city]);
    setCityDays([...cityDays]);
    setCityHour([...cityHour]);
  }

  function handleState(citys) {
    setCityHour(citys[0].forecast.forecastday[0].hour);
    setCityDays(citys[0].forecast.forecastday);
    isDay = citys[0].current.is_day;
    console.log(isDay);
  }

  function cambiarColorNav(city) {
    if (city.length) {
      if (city[0].current.is_day) {
        return "App font-sans bg-blue-700";
      } else return "App font-sans bg-gray-900";
    } else
      return "App font-sans bg-[url('../public/cornered-stairs.svg')] bg-no-repeat bg-cover";
  }

  return (
    <div className={cambiarColorNav(city)}>
      <div className="flex flex-col justify-evenly items-center sm:flex-row">
        <h1 className="text-2xl ">Weather App</h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center my-2 "
        >
          <div className="relative text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:text-gray-900"
              placeholder="Search..."
              autocomplete="off"
              onChange={(e) => {
                setNewCity(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      {error ? (
        <p className="text-red-800 font-bold">No se encontró la ciudad</p>
      ) : (
        <></>
      )}
      {render ? (
        <div
          className={
            city[0].current.is_day
              ? "bg-gradient-to-t from-cyan-500 from-40% to-blue-700"
              : "bg-gradient-to-t from-sky-950 from-10% to-gray-900"
          }
        >
          <Card city={city} />
          <CardHour city={cityHour} isDay={city[0].current.is_day} />
          <CardDays
            city={cityDays}
            render={render}
            isDay={city[0].current.is_day}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-6xl font-medium rounded-lg">
            Ingresa una ciudad
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
