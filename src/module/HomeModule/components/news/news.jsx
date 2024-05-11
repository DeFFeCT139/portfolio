import axios from 'axios';
import style from './css/News.module.css'
import { useQuery } from 'react-query';
import { Title } from 'chart.js';

const getNews = async() => {
    const {data} = await axios.get('https://openapiv1.coinstats.app/news?limit=10', {
        method: 'GET',
        headers: {
            "Accept":"application/json",
            "X-Api-Key": "/xxlKrf9jC8Lg2rwjDL1fg2fGteaHtE0bjSkOkDh1x8=",
        }
    })
    return data
}

const News = () => {
    const {data} = useQuery('news', getNews, {
        refetchOnWindowFocus: false
      })

    return (
      <div className={style.News}>
         <h1>News</h1>
        {data&&
            <div className="">
                {data.result.map(item => 
                    <a key={data.result.indexOf(item)} href={item.link}>
                        <div className="">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="">
                            <h3 className="">{item.title}</h3>
                        </div>
                    </a>    
                )}
            </div>
        }
      </div>
    );
  };
  
export default News;