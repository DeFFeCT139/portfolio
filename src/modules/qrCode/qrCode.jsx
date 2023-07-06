import QRCode from "react-qr-code";
import style from './css/qrCode.module.css'
import { useEffect, useState } from "react";

function QrCodes() {

  const [state, setState] = useState('')

  const getLink = () => {
    if (document.getElementById('idInput').value !== '') {
      let text = document.getElementById('idInput').value
      document.getElementById('Qr').classList.add(style.QrCodeBlcokRightActive)
      setState(text)
    }
  }

  return (
    <div className={style.QrCode}>
      <div className={style.QrCodeBlcok}>
      <div className={style.QrCodeBlcokLeft}>
        <div className={style.QrCodeBlcokInput}>
          <div className={style.QrCodeBlcokInputText}>Введите ссылку</div>
          <input id="idInput" className={style.QrCodeBlcokInputInput} type="text" />
        </div>
        <div onClick={getLink} className={style.QrCodeBlcokBtn}>Сгенерировать QRCode</div>
      </div>
        <div id="Qr" className={style.QrCodeBlcokRight}>
          {state === ''? 
            <div className={style.QrCodeBlcokRightText}>Для генерации QR Coda Вствать ссылку и нажмите "Сгенерировать QRCode"</div>
            :
            <QRCode className={style.QrCoeImg} value={state}/>
          }
        </div>
      </div>
    </div>
  );
}

export default QrCodes;