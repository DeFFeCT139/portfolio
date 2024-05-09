import { useEffect } from 'react';
import style from './css/MapModule.module.css'
import cast from './castam.json'


const MapModule = () => {

  const initMap = async () => {
    let element = document.getElementById("21312");
    await ymaps3.ready;
    if (element.children.length < 1) {
      const {YMap, YMapDefaultSchemeLayer} = ymaps3
      const map = new YMap(element,
      {
          location: {
              center: [37.588144, 55.733842],
              zoom: 10
          }  
      })
      map.addChild(new YMapDefaultSchemeLayer({
        theme: "dark",
    }));
    }
  }

  useEffect(()=>{
    initMap();
  },[])

    return (
      <div id='21312' className={style.MapModule}>
        
      </div>
    );
  };
  
export default MapModule;