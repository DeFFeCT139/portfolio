import axios from 'axios';
import style from './css/WeatherModule.module.css'
import { useQuery } from 'react-query';
import Loader from '../../components/UI/loader/loader';
import WeatherAll from './components/weatherAll/weatherAll';
import Weather5 from './components/weather5/weather5';
import WeatherMap from './components/weatherMap/weatherMap';

const getWeather = async () => {
  let {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=55.751320&lon=37.786887&appid=5ebbe99359993cc0d9373a4a213c9d75&lang=ru')
  return data
}

const WeatherModule = () => {
  const data = useQuery('data', getWeather)

    return (
      <div className={style.WeatherModule}>
        <div className="container">
          {data.isLoading?
            <Loader/>
          :
          <div className={style.WeatherModule_content}>
            <WeatherMap style={style}/>
            <WeatherAll data={data.data} style={style}/>
            <Weather5 style={style}/>
          </div>
          }
        </div>
      </div>
    );
  };
  
export default WeatherModule;