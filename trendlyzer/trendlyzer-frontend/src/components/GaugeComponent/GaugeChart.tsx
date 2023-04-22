import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function GaugeChart(){
    const data = {
        // labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
            label: 'Sentiments',
            data:[7, 4, 3],
            backgroundColor:['#00ff00', '#ffff00', '#ff0000'],
            borderColor:['#00ff00', '#ffff00', '#ff0000'],
            circumference: 180,
            rotation: 270
        }]
    }
    
    return(
        <div>
            <Doughnut data={data}></Doughnut>
        </div>
    )
}

export default GaugeChart;