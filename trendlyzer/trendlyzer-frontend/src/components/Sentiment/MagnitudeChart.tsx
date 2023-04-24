import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MagnitudeChartComponent = ({ positive, negative }: any) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: undefined,
    subtitle: {
      text: 'Sentiment Magnitude',
    },
    xAxis: {
      categories: ['Positive', 'Negative'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Magnitude',
      },
      gridLineColor: 'fff',
    },
    colors: ['#b5179eff', '#480ca8ff'],
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Positive',
        data: positive,
        type: 'column',
      },
      {
        name: 'Negative',
        data: negative,
        type: 'column',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />;
};

export default MagnitudeChartComponent;
