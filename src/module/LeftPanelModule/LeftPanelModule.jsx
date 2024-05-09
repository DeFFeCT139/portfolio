import LinkItem from './components/link/link';
import style from './css/LeftPanelModule.module.css'
import Button from '../../components/UI/button/button';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../features/auth/auth';
import {privatRouts} from '../../router/routs'
import { useLocation } from 'react-router-dom';


const LeftPanelModule = () => {

  const dispatch = useDispatch()
  const location = useLocation();

  const logOut = () => {
      localStorage.clear()
      dispatch(setAuth(false))
  }

    return (
      <div className={style.LoginModule}>
        <div className={style.LoginModule_inner}>
          <div className={style.LoginModule_Title}>Dashboard</div>
          <div className={style.LoginModule_ListLink}>
            {privatRouts.map(item => 
              <LinkItem key={privatRouts.indexOf(item)} active={location.pathname === item.path? true: false} link={item.path} name={item.name}/>
            )}
          </div>
          <div className={style.LoginModule_Button}>
            <Button onClick={logOut} title={'Log out'}/>
          </div>
        </div>
      </div>
    );
  };
  
export default LeftPanelModule;