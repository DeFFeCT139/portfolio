import { useState } from 'react';
import style from './css/TodoListModule.module.css'

const TodoListModule = () => {

  const [listTable, setListTable] = useState([
    {id: 1, name: 'Open', array: []},
    {id: 2, name: 'Closed', array: []},
    {id: 3, name: 'Cancelled', array: []},
    {id: 4, name: 'For later', array: []},
  ])

    return (
      <div className={style.TodoListModule}>
        <div className="container">
          <div className={style.TodoListModule_list}>
            {listTable.map(item => 
              <div key={item.id} className={style.TodoListModule_item}>
                <div className={style.TodoListModule_item_title}>{item.name}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export default TodoListModule;