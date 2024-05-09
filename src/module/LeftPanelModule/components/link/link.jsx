import style from './css/Link.module.css'
import {Link} from 'react-router-dom'

const LinkItem = ({name, active, link, id}) => {

    return (
      <div>
        <Link id={id} to={link} className={`${style.LinkItem} ${active? style.LinkItem_active:' '}`}>{name}</Link>
      </div>
    );
  };
  
export default LinkItem;