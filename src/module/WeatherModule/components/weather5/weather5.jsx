import axios from "axios";
import { useQuery } from "react-query";


const getWeather5 = async () => {
    let {data} = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=55.751320&lon=37.786887&appid=5ebbe99359993cc0d9373a4a213c9d75&lang=ru')
    return data
}

const Weather5 = ({style}) => {

    const listW = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    const data = useQuery('data5', getWeather5, {
      refetchOnWindowFocus: false
    })

      return (
        <div className={style.Weather5}>
          {!data.isLoading&&
            <div className={style.Weather5_list}>
                {data.data.list.filter(item => new Date(item.dt_txt).getHours() === 12).map(item => 
                    <div key={data.data.list.indexOf(item)} className={style.Weather5_item}>
                        <div className={style.Weather5_item_dw}>{listW[new Date(item.dt_txt).getDay()]}</div>
                        <div className={style.Weather5_item_d}>{`${new Date(item.dt_txt).toLocaleString('ru',{day:'numeric', month:'short'})}`}</div>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                        <div className={style.Weather5_item_t}>{Math.round(item.main.temp - 273.15)}&deg;</div>
                        <div className={style.Weather5_item_tl}>{Math.round(item.main.feels_like - 273.15)}&deg;</div>
                        <div className={style.Weather5_item_desc}>{item.weather[0].description}</div>
                    </div>
                )}
            </div>
          }
        </div>
      );
    };
    
export default Weather5;