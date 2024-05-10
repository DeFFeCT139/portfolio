import style from './css/FilmsModule.module.css'
import axios from "axios";
import { useQuery } from "react-query";
import Loader from '../../components/UI/loader/loader'
import Card from './components/card/card';


const getFilmsModule = async () => {
    let {data} = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
        method: 'GET',
        headers: {
            'X-API-KEY': '9778e4ae-e72a-4751-b592-7113bfada6e7',
            'Content-Type': 'application/json',
        },
    })
    return data
}


const FilmsModule = () => {

  const {data, isLoading} = useQuery('dataFilms', getFilmsModule)

    return (
      <div className={style.FilmsModule}>
        <div className="container">
          {isLoading?
            <Loader/>:
            <div className={style.FilmsModule_list}>
              {data.items.map(item => 
                <Card data={item} key={data.items.indexOf(item)} style={style}/>
              )}
            </div>
          }
        </div>
      </div>
    );
  };
  
export default FilmsModule;