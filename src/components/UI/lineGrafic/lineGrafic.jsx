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
    const data3 = [1,3,7,1,4,2,4]
    const data4 = [5,1,4,5,2,6,4]
  
    const data2 = {
        labels,
        datasets: [
                {
                  label: 'Значение 1',
                  data: data.map(row => row),
                  borderColor: '#F0F5F9',
                  backgroundColor: '#F0F5F9',
                  pointRadius: 0.02,
                  cubicInterpolationMode: 'monotone',
                },
                {
                  label: 'Значение 2',
                  data: data3.map(row => row),
                  borderColor: '#D53E07',
                  backgroundColor: '#D53E07',
                  pointRadius: 0.02,
                  cubicInterpolationMode: 'monotone',
                },
                {
                  label: 'Значение 3',
                  data: data4.map(row => row),
                  borderColor: '#FF9900',
                  backgroundColor: '#FF9900',
                  pointRadius: 0.02,
                  cubicInterpolationMode: 'monotone',
                }
              ]
      };
  
  
    return (
        <Line options={options} data={data2}/>
    );
  }
  
export default LineGrafic;