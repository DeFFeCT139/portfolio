import style from './css/button.module.css'

const Button = ({title, addStyle, onClick}) => {
    return (
      <button style={addStyle} onClick={onClick} className={style.button}>{title}</button>
    );
  };
  
export default Button;