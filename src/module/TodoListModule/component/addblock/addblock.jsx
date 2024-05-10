import { useState } from "react";
import iconClose from '../../img/close.svg'
import Button from "../../../../components/UI/button/button";
import Input from "../../../../components/UI/input/input";
import { getDatabase, ref, onValue, set } from "firebase/database";
import Textarea from "../../../../components/UI/textarea/textarea";

const Addblock = ({list, style, id}) => {

    const [openAdd, setOpenAdd] = useState(false)

    const addItem = () =>{
        if (openAdd === true) {
          let listItemsBoard = list[id].item === undefined? []: list[id].item
          listItemsBoard.push({
            desc: document.getElementById('descCard').value,
            id: list[id].item === undefined? listItemsBoard.length + 1: listItemsBoard[listItemsBoard.length-1].id + 1,
            title: document.getElementById('titleCard').value
          })
          const db = getDatabase();
          set(ref(db, `/list/${id}/item/`), listItemsBoard);
          setOpenAdd(false)
        } else {
          setOpenAdd(true)
        }
    }
    
    const closeAdditemBlock = () =>{
        setOpenAdd(false)
    }



    return (
        <div className="">
            {openAdd&&
            <div className="">
                <div className={style.TodoListModule_item_item}>
                <div className={style.TodoListModule_item_item_title}>
                    <Input id={'titleCard'} placeholder={'Title'} type={'text'}/>
                    <img onClick={closeAdditemBlock} src={iconClose} alt="" />
                </div>
                <div className={style.TodoListModule_item_item_desc}>
                    <Textarea id={'descCard'} placeholder={'Description'}/>
                </div>
                </div>
            </div>
            }
            <div className={style.TodoListModule_add}>
            <Button onClick={addItem} addStyle={{backgroundColor: '#2b3236'}} title={'Add'}/>
            </div>
        </div>
    );
  };
  
export default Addblock;