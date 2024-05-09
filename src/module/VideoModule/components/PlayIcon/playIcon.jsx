import style from './css/iconPley.module.css'
import iconPlay from './img/play.svg'


const PlayIcon = () => {

    return (
      <div className={style.PlayIcon}>
        <img src={iconPlay} alt="" />
      </div>
    );
  };
  
export default PlayIcon;