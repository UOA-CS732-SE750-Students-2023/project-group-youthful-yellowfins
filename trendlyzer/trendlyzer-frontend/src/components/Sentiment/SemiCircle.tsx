import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IChartValues } from '../../models/common';

const Piechart = ({ positive, negative, neutral, totalTweetsAnalysed }: IChartValues) => {
  const positivePercentage = (positive / totalTweetsAnalysed) * 100;
  const negativePercentage = (negative / totalTweetsAnalysed) * 100;
  const neutralPercentage = (neutral / totalTweetsAnalysed) * 100;

  const options: Highcharts.Options = {
    colors: ['#34c52a', '#fcdc0c', '#c6102c'],
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
      text: `${totalTweetsAnalysed.toString()} Tweets Analyzed`,
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
          [`Positive ${positivePercentage.toFixed(1)}%`, positivePercentage],
          [`Neutral ${neutralPercentage.toFixed(1)}%`, neutralPercentage],
          [`Negative ${negativePercentage.toFixed(1)}%`, negativePercentage],
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />;
};
export default Piechart;
