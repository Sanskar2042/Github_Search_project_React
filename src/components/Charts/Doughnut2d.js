import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2D = ({data}) =>{

  const chartConfigs = {
    type: "doughnut2D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption:"Stars Per Language",
        theme:"candy",
        decimals:0,
        doughnutRadius:'50%',
        showPercentValues:0,
      },
      data:data,
    }
  };

  return <ReactFC {...chartConfigs} />
}

export default Doughnut2D;