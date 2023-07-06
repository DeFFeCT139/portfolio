import style from './css/leftPanel.module.css'
import { Link } from "react-router-dom";
import TIMER from './image/timer_3_alt_1_FILL0_wght400_GRAD0_opsz48.svg'
import WEATHER from './image/thunderstorm_FILL0_wght400_GRAD0_opsz48.svg'
import QRCODE from './image/qr_code_2_add_FILL0_wght400_GRAD0_opsz48.svg'

function LeftPanel() {

  const openPanel = () => document.getElementById('LeftPanel').classList.toggle(style.leftPanelActive)
  const  ActivLink = (e) => {
    let clases = document.getElementsByClassName(style.leftPanelContentLink)


    for (let index = 0; index < clases.length; index++) {
      if (clases[index].innerText === e.target.innerText) {
        clases[index].classList.add(style.leftPanelContentLinkActive)
      } else {
        clases[index].classList.remove(style.leftPanelContentLinkActive)
      }
    }
  }

  return (
    <div id='LeftPanel' className={style.leftPanel}>
      <div className={style.leftPanelTitle}>
        <div onClick={openPanel} className={style.leftPanelIcon}>JS</div>
        <div className={style.leftPanelTitleText}>Portfolio</div>
      </div>
      <div className={style.leftPanelContent}>
        <div className={style.leftPanelContentLinks}>
          <Link to={'/'} onClick={ActivLink} className={style.leftPanelContentLink + ' ' + style.leftPanelContentLinkActive}>
            <img className={style.leftPanelContentLinkImg} src={TIMER} alt="" />
            <span>TIMER</span>
          </Link>
          <Link to={'/weather'} onClick={ActivLink} className={style.leftPanelContentLink}>
            <img className={style.leftPanelContentLinkImg} src={WEATHER} alt="" />
            <span>WEATHER</span>
          </Link>
          <Link to={'/qrCode'} onClick={ActivLink} className={style.leftPanelContentLink}>
            <img className={style.leftPanelContentLinkImg} src={QRCODE} alt="" />
            <span>QR Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
