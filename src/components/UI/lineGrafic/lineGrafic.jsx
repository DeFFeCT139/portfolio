import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';
import { Line } from 'react-chartjs-2';
  
function LineGrafic() {
    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement,);
  
    const options = {
      responsive: true,
      plugins:{
        legend:{
          labels:{
            color: '#fff'
          }
        }
      },
      scales:{
          y:{
            ticks: {
              color: '#fff',
            },
            beginAtZero:true,
            min: 0,
          },
          x:{
            ticks: {
              color: '#fff',
            }
          }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = [1,5,3,1,5,2,7]
  
    const data2 = {
        labels,
        datasets: [
                {
                  label: '',
                  data: data.map(row => row),
                  borderColor: '#F0F5F9',
                  backgroundColor: '#F0F5F9',
                  pointRadius: 0.02,
                }
              ]
      };
  
  
    return (
        <Line options={options} data={data2}/>
    );
  }
  
export default LineGrafic;