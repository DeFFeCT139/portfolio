import axios from 'axios';
import DoughnutGrasfic from '../../components/UI/DoughnutGrasfic/DoughnutGrasfic';
import LineGrafic from '../../components/UI/lineGrafic/lineGrafic';
import style from './css/HomeModule.module.css'
import { useQuery } from 'react-query';
import Loader from '../../components/UI/loader/loader'
import Table from './components/table/table';
import News from './components/news/news';
import { useState } from 'react';

const getCoins = async(skip) => {
    const {data} = await axios.get(`https://openapiv1.coinstats.app/coins?page=${skip}&limit=10&currency=USD`, {
        method: 'GET',
        headers: {
            "Accept":"application/json",
            "X-Api-Key": "/xxlKrf9jC8Lg2rwjDL1fg2fGteaHtE0bjSkOkDh1x8="
        }
    })
    return data
}

const HomeModule = () => {

    const [page, setPage] = useState(1)
    const {data, isLoading} = useQuery(['coins', page], ()=> getCoins(page), {
        keepPreviousData: true
    })

      return (
        <div className={style.HomeModule}>
          <div className="container">
            {isLoading?
                <Loader/>:
                <div className={style.HomeModule_inner}>
                    <div className={style.HomeModule_inner_center}>
                        <LineGrafic/>
                    </div>
                    <div className={style.HomeModule_inner_center_center}>
                        <DoughnutGrasfic/>
                    </div>
                    <div className={style.HomeModule_inner_center_right}>
                        <Table page={page} setPage={setPage} data={data.result}/>
                    </div>
                    <div className={style.HomeModule_inner_bottom}>
                        <News/>
                    </div>
                </div>
            }
          </div>
        </div>
      );
    };
    
  export default HomeModule;