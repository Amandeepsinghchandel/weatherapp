import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";



const MaterialUI = () => {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "86d65bb5184b93a24807398a4ea8862f";

let getWeatherInfo = async() =>{
  let response = await fetch (
    `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
  )
  let responseJson =await response.json();
  console.log(responseJson);

  let result={
    temp: responseJson.main.temp,
    max_temp: responseJson.main.temp_max,

  };

  return result;
};


  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setCity("");
    console.log(city)
    getWeatherInfo()
  };


  

  return (
    <div>
      <div className="border border-6 text-center p-8 m-8 ">
        <h1>Search for weather</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="City Name"
              variant="outlined"
              value={city}
              onChange={handleChange}
            />
            <br />
            <Button variant="contained" color="success" type="submit">
              SEARCH
            </Button>
          </form>

          <div className="ml-16 pt-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg"
                title="mohali"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MOHALI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Temp: 32&deg;c
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Max. Temp: 41&deg;c
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Min. Temp: 16&deg;c
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Humidity: Medium
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MaterialUI;