import style from './css/textarea.module.css'

const Textarea = ({title, type, id, placeholder}) => {
    return (
      <div className={style.Textarea}>
         <div className={style.Textarea_Title}>{title}</div> 
         <textarea placeholder={placeholder} id={id}></textarea>
      </div>
    );
  };
  
export default Textarea;