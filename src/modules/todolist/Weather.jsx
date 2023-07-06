import { useEffect, useState } from 'react'
import style from './css/weather.module.css'
import Sunny from './image/32/Color=Off.svg'
import weath from './image/32/Color=Off-24.svg'
import weater from './image/32/Color=Off-8.svg'
import Card from './components/card/card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios'


function Weather() {
  const [value, setValue] = useState({})
  const [valueMain, setValueMain] = useState({})

  const getValue = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&appid=488a40e10e77892cccf27c8a81355e04', ).then((date) => {
      setValue(date.data)
      setValueMain(date.data.main)
    })
  }

  useEffect(() => {
    getValue()
  }, [])

  return (
    <div className={style.weather}>
      <div className={style.weatherInnser}>
        <div className={style.conteiner}>
          <div className={style.weatherContent}>
            <div className={style.weatherDay}>
              <div className={style.weatherDayBlock}>
                <div className={style.weatherDayBlockSityName}>Сегодня,{value.name}</div>
                <div className={style.weatherDayBlockInfo}>
                {valueMain !== NaN?
                  <div className={style.weatherDayBlockInfoDeg}>+{Math.floor(valueMain.temp- 273)}&deg;</div>: 
                  <div className={style.weatherDayBlockInfoDeg}>+0&deg;</div>
                  }
                  <div className={style.weatherDayBlockInfoImg}>
                    <img className={style.weatherDayBlockInfoImage} src={Sunny} alt="" />  
                  </div>
                  <div className={style.weatherDayBlockInfoText}>
                    <div className={style.weatherDayBlockInfoTextTitle}></div>
                    <div className={style.weatherDayBlockInfoTextDesc}>Ощущаеться как +4&deg;</div>
                  </div> 
                </div>
                <div className={style.weatherDayBlockInfoback}>
                  <div className={style.weatherDayBlockInfobackItem}>
                    <img className={style.weatherDayBlockInfobackItemImg} src={weath} alt="" />  
                    <div className={style.weatherDayBlockInfobackItemTitle}>2,0 м/с, Ю</div>
                  </div>
                  <div className={style.weatherDayBlockInfobackItem}>
                    <img className={style.weatherDayBlockInfobackItemImg} src={weater} alt="" />  
                    <div className={style.weatherDayBlockInfobackItemTitle}>95%</div>
                  </div>
                </div>
              </div>
              <div className={style.weatherMap}>
                <iframe className={style.weatherMapFrame} src="https://yandex.ru/map-widget/v1/?um=constructor%3A46a53ef343964c129ea8c1304cba219ad30599cb72229303ca7a427c5b91865c&amp;source=constructor" width="500" height="500" frameBorder="0"></iframe>
              </div>
            </div>
            <div className={style.weatherList}>
            <Swiper
              spaceBetween={0}
              slidesPerView={5}
            >
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
              <SwiperSlide><Card/></SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;