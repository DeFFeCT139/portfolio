import style from './css/input.module.css'

const Input = ({title, type, id, placeholder, value}) => {
    return (
      <div className={style.Input}>
         <div className={style.Input_Title}>{title}</div> 
         <input defaultValue={value} placeholder={placeholder} id={id} type={type} />
      </div>
    );
  };
  
export default Input;