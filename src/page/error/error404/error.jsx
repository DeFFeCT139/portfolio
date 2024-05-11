import { Link } from 'react-router-dom'
import style from './css/error404.module.css'
import img from './img/logo512.png'

const Error404 = ({state}) => {
    return (
      <div className={style.Error}>
        {state?
            <div className="container">
              <div className={style.Error_inner}>
                <div className="">
                  <div className={style.Error_content}>
                    <div className="">404</div>
                    <img src={img} alt="" />
                  </div>
                  <Link to={'/'} className="">They will return to the main page</Link>
                </div>
              </div>
            </div>:
            <div className="">
              <div className={style.Error_inner}>
                <div className="">
                  <div className={style.Error_content}>
                    <div className="">404</div>
                    <img src={img} alt="" />
                  </div>
                  <Link to={'/'} className="">They will return to the main page</Link>
                </div>
              </div>
            </div>
        }
      </div>
    );
  };
  
export default Error404;