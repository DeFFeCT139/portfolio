import style from './css/button.module.css'

const Button = ({title, onClick}) => {
    return (
      <button onClick={onClick} className={style.button}>{title}</button>
    );
  };
  
export default Button;