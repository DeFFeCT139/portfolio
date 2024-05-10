import { useEffect, useState } from 'react';
import style from './css/TodoListModule.module.css'
import { getDatabase, ref, onValue, set } from "firebase/database";
import Addblock from './component/addblock/addblock';
import Card from './component/card/card';



const TodoListModule = () => {

  const [list, setList] = useState([])
  const [curentBoard, setCurentBoard] = useState(null)
  const [curentCard, setCurentCard] = useState(null)

  const getData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, '/list');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setList(data);
    });
  }
  useEffect(()=> {
    getData() 
  },[])

  const dragOverHandler = (e) =>{
    e.preventDefault()
  }

  const dragStartHandler = (e, board, card) =>{
    setCurentBoard(board)
    setCurentCard(card)
  }

  const dropHandler = (e, board, card) =>{
    e.preventDefault()
    if (board.item.indexOf(curentCard) === -1) {
      const currentIndex = curentBoard.item.indexOf(curentCard)
      curentBoard.item.splice(currentIndex, 1)
      const boardIndex = board.item.indexOf(card)
      board.item.splice(boardIndex + 1, 0, curentCard)
      const db = getDatabase();
      set(ref(db, `/list/`), list.map( b => {
        if (b.id === board.id) return board
        if (b.id === curentBoard.id) return curentBoard
        return b
      }));
    }
  }

  const dropCardHandler = (e, board) =>{
    if (board.item === undefined) {
      board.item = [curentCard]
      const currentIndex = curentBoard.item.indexOf(curentCard)
      curentBoard.item.splice(currentIndex, 1)
      const db = getDatabase();
      set(ref(db, `/list/`), list.map( b => {
        if (b.id === board.id) return board
        if (b.id === curentBoard.id) return curentBoard
        return b
      }));
    } else {
      if (board.item.indexOf(curentCard) === -1) {
        board.item.push(curentCard)
        const currentIndex = curentBoard.item.indexOf(curentCard)
        curentBoard.item.splice(currentIndex, 1)
        const db = getDatabase();
        set(ref(db, `/list/`), list.map( b => {
          if (b.id === board.id) return board
          if (b.id === curentBoard.id) return curentBoard
          return b
        }));
      }
    }
  }


    return (
      <div className={style.TodoListModule}>
        <div className="container">
          <div className={style.TodoListModule_list}>
            {list.map(item => 
              <div  
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropCardHandler(e, item)}
                key={item.id} 
                className={style.TodoListModule_item}>
                <div className={style.TodoListModule_item_title}>{item.title}</div>
                {item.item && item.item.map(item2 => 
                  <Card
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, item, item2)}
                    onDrop={(e) => dropHandler(e, item, item2)}
                    key={item.item.indexOf(item2)} 
                    list={list} 
                    style={style} 
                    item={item} 
                    item2={item2}
                  />
                )}
                <Addblock id={item.id - 1} list={list} style={style}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export default TodoListModule;