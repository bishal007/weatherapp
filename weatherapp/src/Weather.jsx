import { useEffect, useState } from "react";

export default function weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleClick = (e) => {
    // e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=21b4d1b9e51e4c1e8d001943240707&q=${city}`
    )
      .then((res) => res.json())
      .then((res) => setData([res]));
    setCity("");
  };
  return (
    <div className="App">
      <input
        type="text"
        name="city"
        value={city}
        placeholder="Enter City Name"
        onChange={(e) => handleCity(e)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>
      <br />
      {data.map((item, id) => {
        return (
          <li key={id}>
            <p>{<img src={item.current.condition.icon} />}</p>
            <p>region : {item.location.region}</p>
            <p>Temp : {item.current.temp_c} °C</p>
            <p>last updated : {item.current.last_updated}</p>
          </li>
        );
      })}
    </div>
  );
}
