import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Piechart = ({ positive, negative, neutral }: any) => {
  const options: Highcharts.Options = {
    colors: ['#b5179eff', '#7209b7ff', '#3a0ca3ff'],
    chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Sentiment Overview',
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
        allowPointSelect: true,
        cursor: 'pointer',
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
  return <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />;
};
export default Piechart;
