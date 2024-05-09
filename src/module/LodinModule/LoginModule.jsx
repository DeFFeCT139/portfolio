import { useDispatch } from 'react-redux';
import Button from '../../components/UI/button/button';
import Input from '../../components/UI/input/input';
import { setAuth } from '../../features/auth/auth';
import style from './css/LoginModule.module.css'

const LoginModule = () => {

  const dispatch = useDispatch()

  const login = () => {
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    if (login === 'admin' && password === 'admin') {
      localStorage.setItem('data', 'admin')
      dispatch(setAuth(true))
    }
  }

    return (
      <div className={style.LoginModule}>
            <div className={style.LoginModule_inner}>
                <span>LoginBar</span>
                <Input id={'login'} title={'Login'} type={'text'}/>
                <Input id={'password'} title={'Password'} type={'password'}/>
                <Button onClick={login} title={'Login'}/>
            </div> 
      </div>
    );
  };
  
export default LoginModule;