import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
  
function DoughnutGrasfic() {
    ChartJS.register(ArcElement, Tooltip, Legend);
  
    const data = {
      labels: ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#FF9900',
            '#F54021',
            '#007D34',
            '#EEDC82',
            '#660099',
            '#6699CC',
          ],
          borderColor: [
            '#FF9900',
            '#F54021',
            '#007D34',
            '#EEDC82',
            '#660099',
            '#6699CC',
          ],
          borderWidth: 1,
        },
      ],
    };
  
  
    return (
        <Doughnut style={{width: '100%', height: '100%'}} data={data} />
    );
  }
  
export default DoughnutGrasfic;