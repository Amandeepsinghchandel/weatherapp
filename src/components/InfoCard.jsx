import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoCard = ({ info }) => {
  const HOT_IMG =
    "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE=";

  const COLD_IMG = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const RAIN_IMG = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?b=1&s=170667a&w=0&k=20&c=aLCX4pjFdCryX8YghFAFv6mT8JBbR-5G00Ins83Tn34="

  return (
    <div className="ml-[450px] mt-4">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={info.humidity > 75 ? RAIN_IMG : info.temp>15 ? HOT_IMG : COLD_IMG}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.humidity > 75 ? <ThunderstormIcon/> : info.temp>15 ? <LightModeIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>Temp: {info.temp} &deg;C</div>
              <div>Max Temp: {info.max_temp} &deg;C</div>
              <div>Min Temp: {info.min_temp} &deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>Pressure: {info.pressure} Pa</div>
              <div>Weather can be described as <i>{info.weather}</i>  & feels like {info.feels_like}&deg;C</div>
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default InfoCard;