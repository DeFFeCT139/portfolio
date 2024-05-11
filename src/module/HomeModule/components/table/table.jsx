import style from './css/Table.module.css'

const Table = ({data, setPage, page}) => {

      return (
        <div className={style.Table}>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th></th>
                        <th>Наименование</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => 
                        <tr key={data.indexOf(item)}>
                            <td>{item.rank}</td>
                            <td><img src={item.icon} alt="" /></td>
                            <td>{`${item.name} / ${item.symbol}`}</td>
                            <td>${item.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="">
                <div onClick={()=> page != 1&& setPage(page - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0F5F9" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </div>
                <div onClick={()=> setPage(page + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0F5F9" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
        </div>
      );
    };
    
export default Table;