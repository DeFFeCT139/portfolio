import { getDatabase, ref, set} from "firebase/database";

const Card = ({list, style, item, item2, onDragOver, onDragLeave, onDragStart, onDragEnd, onDrop}) => {


    const deleteItem = (boardId, currentItem) =>{
        let listItemsBoard = list[boardId - 1].item
        const db = getDatabase();
        set(ref(db, `/list/${boardId - 1}/item/`), listItemsBoard.filter((item) => item !== currentItem));
    }



    return (
        <div 
            draggable={true}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
            key={item2.id} 
            className={style.TodoListModule_item_item}
        >
            <div className={style.TodoListModule_item_item_title}>
                <span>{item2.title}</span>
                <svg onClick={()=> deleteItem(item.id,item2)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>
            </div>
            <div className={style.TodoListModule_item_item_desc}>{item2.desc}</div>
        </div>
    );
  };
  
export default Card;