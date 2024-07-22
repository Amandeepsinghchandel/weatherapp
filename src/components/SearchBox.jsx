import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";

const SearchBox = ({updateInfo}) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "86d65bb5184b93a24807398a4ea8862f";

  let getWeatherInfo = async () => {
    try {
    let response = await fetch(
      `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
    );
    let responseJson = await response.json();
    console.log(responseJson);

    let result = {
      city:city,
      temp: responseJson.main.temp,
      max_temp: responseJson.main.temp_max,
      min_temp: responseJson.main.temp_min,
      feels_like: responseJson.main.feels_like,
      humidity: responseJson.main.humidity,
      weather: responseJson.weather[0].main,
      pressure: responseJson.main.pressure,
    };

    return result;
  } catch (err) {
    throw err;
  }

  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async(e) => {
    try {
    e.preventDefault();
    console.log(city);
    setCity("");
   let newInfo = await getWeatherInfo();
   updateInfo(newInfo);
  } catch (err) {
    setError(true);
  }
  };

  return (
    <div>
      <h1 className="text-black text-lg mb-4">Search For the Weather</h1>

      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="text-center ">
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <div className="mt-5">
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">Invalid City Name</p>}
    </div>
  );
};

export default SearchBox;