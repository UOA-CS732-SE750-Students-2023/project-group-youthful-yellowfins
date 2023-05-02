import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IChartValues } from '../../models/common';

const Piechart = ({ positive, negative, neutral }: IChartValues) => {
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
    subtitle: {
      text: '10 Tweets Analyzed',
      align: 'center',
      verticalAlign: 'middle',
      y: 80,
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
          [`Positive ${positive}%`, positive],
          [`Neutral ${neutral}%`, neutral],
          [`Negative ${negative}%`, negative],
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />;
};
export default Piechart;
