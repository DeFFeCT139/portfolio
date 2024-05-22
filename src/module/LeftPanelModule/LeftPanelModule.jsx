import LinkItem from './components/link/link';
import style from './css/LeftPanelModule.module.css'
import Button from '../../components/UI/button/button';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../features/auth/auth';
import {privatRouts} from '../../router/routs'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const LeftPanelModule = () => {

  const setOpenClose = () => {
    document.getElementById('lpanel').classList.toggle(style.close)
  }

  const dispatch = useDispatch()
  const location = useLocation();

  const logOut = () => {
      localStorage.clear()
      dispatch(setAuth(false))
  }

    return (
      <div id={'lpanel'} className={style.LoginModule}>
        <div className={style.LoginModule_inner}>
          <div className={style.LoginModule_Title}>Dashboard</div>
          <div className={style.LoginModule_ListLink}>
            {privatRouts.map(item => 
              <div key={privatRouts.indexOf(item)} className="">
                {item.stateLP&&
                  <LinkItem active={location.pathname === item.path? true: false} link={item.path} name={item.name}/>
                }
              </div>
            )}
          </div>
          <div className={style.LoginModule_Button}>
            <Button onClick={logOut} title={'Log out'}/>
          </div>
          <div onClick={setOpenClose} className={style.LoginModule_OpenClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#F0F5F9" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
export default LeftPanelModule;