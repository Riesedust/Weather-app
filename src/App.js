import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [citys, setCitys] = useState([]);
  const [newCity, setNewCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const apiURL = `http://api.weatherapi.com/v1/forecast.json?key=2fc2b8af08884e2098a125135231912&q=${newCity}&days=7&aqi=no&alerts=no
    `;
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        setCitys([response]);
      });
    setNewCity("");
    setCount(count + 1);

    console.log(citys);
  }

  return (
    <div className="App">
      <h1 className="text-lg">App clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setNewCity(e.target.value);
          }}
          placeholder="Ingresa tu ciudad"
        />
        <button>Buscar</button>
      </form>
      <Cards citys={citys} />
    </div>
  );
}

export default App;
