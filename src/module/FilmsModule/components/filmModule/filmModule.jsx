import style from './css/FilmModule.module.css'
import axios from "axios";
import { useQuery } from "react-query";
import Loader from '../../../../components/UI/loader/loader'
import { useParams } from 'react-router-dom';


const getFilmsModule = async (id) => {
    let {data} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': '9778e4ae-e72a-4751-b592-7113bfada6e7',
            'Content-Type': 'application/json',
        },
    })
    return data
}


const FilmModule = () => {
  const item = useParams()
  const  {data, isLoading} = useQuery('dataFilm', () => getFilmsModule(item.id), {
    refetchOnWindowFocus: false
  })

    return (
      <div className={style.FilmModule}>
        <div className="container">
          {isLoading?
            <Loader/>:
            <div className={style.FilmModule_inner}>
              <div className={style.FilmModule_top}>
                <div className={style.FilmModule_left}>
                  <div style={{backgroundImage: `url("${data.posterUrlPreview}")`}}></div>
                </div>
                <div className={style.FilmModule_right}>
                  <div className="">
                    <h1>{data.nameRu?data.nameRu:data.nameOriginal}</h1>
                    <div className={style.FilmModule_right_reiting}>
                      <span>Рейтинг: </span>
                      <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F0F5F9" className="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                        <div className="">{data.ratingKinopoisk}</div>
                      </div>
                    </div>
                    <div className="">Название: {data.nameRu?data.nameRu:data.nameOriginal} </div>
                    <div className="">Год: {data.year}</div>
                    <div className=""> 
                      <span>Жанры: </span>
                      <span className="">
                        {data.genres.map(item => 
                          <span key={data.genres.indexOf(item)} className="">{item.genre} </span> 
                        )}
                      </span>
                    </div>
                    <div className="">
                      <span>Страна: </span>
                      <span className="">
                        {data.countries.map(item => 
                          <span key={data.countries.indexOf(item)} className="">{item.country} </span> 
                        )}
                      </span>
                    </div>
                    <h1>Описание</h1>
                    <div className="">{data.description}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  };
  
export default FilmModule;