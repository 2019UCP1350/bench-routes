import React, { FC, useContext } from 'react';
import Chart from 'react-apexcharts';
import Alert from '@material-ui/lab/Alert';
import { ThemeContext } from '../../layouts/BaseLayout';
import { chartData } from '../../utils/queryTypes';
import { ApexOptions } from 'apexcharts';

interface PingProps {
  min: chartData[];
  mean: chartData[];
  max: chartData[];
}

const Ping: FC<PingProps> = ({ min, mean, max }) => {
  const themeMode = useContext(ThemeContext);
  let theme;
  if (themeMode === {}) {
    theme = 'light';
  } else {
    theme = themeMode;
  }
  const series = [
    {
      name: 'min',
      data: min
    },
    {
      name: 'mean',
      data: mean
    },
    {
      name: 'max',
      data: max
    }
  ];
  const options: ApexOptions = {
    chart: {
      type: 'area',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    xaxis: {
      title: {
        text: 'Time'
      },
      type: 'category',
      categories: [],
      labels: {
        show: true,
        rotate: 0,
        rotateAlways: false,
        hideOverlappingLabels: true,
        trim: true
      }
    },
    yaxis: {
      title: {
        text: 'milliseconds'
      }
    },
    theme: {
      mode: theme
    }
  };
  return (
    <>
      {!min.length ? (
        <Alert severity="error">No data found</Alert>
      ) : (
        <Chart series={series} options={options} height="300" />
      )}
    </>
  );
};

export default Ping;
