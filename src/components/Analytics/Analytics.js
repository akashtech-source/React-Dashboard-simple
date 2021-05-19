import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
    {
      label: "A1",
      value: "45"
    },
    {
        label: "A2",
        value: "55"
      },
    {
      label: "A3",
      value: "50"
    },
    {
      label: "A4",
      value: "60"
    },
    {
      label: "A5",
      value: "45"
    },
    {
      label: "A6",
      value: "58"
    },
    {
      label: "A7",
      value: "34"
    },
    {
      label: "A8",
      value: "48"
    },
    {
      label: "A9",
      value: "23"
    },
    

  ];

  const chartConfigs = {
    type: "column2d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Your Analytics",
        
        theme: "fusion"
      },
      // Chart Data
      data: chartData
    }
  };
const Analytics = () => {
    return (
        <div>
            <ReactFC {...chartConfigs} />
        </div>
    );
};

export default Analytics;