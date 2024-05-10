const WeatherAll = ({style, data}) => {
      return (
        <div className={style.WeatherAll}>
          <div>
            <div className={style.WeatherAll_name}>{data.name}</div>
            <div className={style.WeatherAll_desc}>Ощущается как {Math.round(data.main.feels_like - 273.15)}&deg;</div>
            <div className={style.WeatherAll_vis}>Видимость: {data.visibility / 1000}км</div>
            <div className={style.WeatherAll_wind}>Скорость ветра: {data.wind.speed }м/с</div>
            <div className={style.WeatherAll_clouds}>Облачность: {data.clouds.all }%</div>
            <div className={style.WeatherAll_hum}>Влажность: {data.main.humidity }%</div>
          </div>
          <div >
            <div className={style.WeatherAllTemp}>
                <div className={style.WeatherAllTemp_item}>{Math.round(data.main.temp - 273.15)}&deg;</div>
                <div className="">
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                </div>
            </div>
            <div className="">{data.weather[0].description}</div>
          </div>
        </div>
      );
    };
    
  export default WeatherAll;