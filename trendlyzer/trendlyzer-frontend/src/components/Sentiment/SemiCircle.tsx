import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Piechart = ({ positive, negative, neutral }: any) => {
  const options: Highcharts.Options = {
    colors: ['#3f37c9ff', '#7209b7ff', '#480ca8ff'],
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: 'Sentiment Analysis',
      align: 'center',
      verticalAlign: 'middle',
      y: 60,
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Sentiment',
        innerSize: '50%',
        data: [
          ['Positive', positive],
          ['Neutral', neutral],
          ['Negative', negative],
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />
    </div>
  );
};
export default Piechart;
