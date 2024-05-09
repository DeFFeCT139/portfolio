import style from './css/input.module.css'

const Input = ({title, type, id}) => {
    return (
      <div className={style.Input}>
         <div className={style.Input_Title}>{title}</div> 
         <input id={id} type={type} />
      </div>
    );
  };
  
export default Input;