import style from './css/card.module.css'
import sunny from '../../image/32/Color=Off.svg'

function Card() {
  return (
    <div className={style.cardInner}>
      <div className={style.card}>
        <div className={style.cardTitle}>Чт</div>
        <div className={style.cardDay}>27 марта</div>
        <div className={style.cardImage}>
          <img src={sunny} className={style.cardImg} alt="" />
        </div>
        <div className={style.cardDeg}>+6&deg;</div>
        <div className={style.cardWather}>Дождь</div>
      </div>
    </div>
  );
}

export default Card;