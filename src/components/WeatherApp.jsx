import { useState } from "react";
import InfoCard from "./InfoCard";
import SearchBox from "./SearchBox";

function WeatherApp() {
  let [info, setInfo] = useState({
    city: "Mohali",
    feelsLike: 32,
    temp: 36,
    tempMax: 45,
    tempMin: 20,
    humidity: 22,
    pressure: 24,
    weather: "clear",
  });

  let updateInfo = (newInfo) =>{
    setInfo(newInfo)
  }

  console.log(info);

  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoCard info={info}/>
    </div>
  );
}

export default WeatherApp;
