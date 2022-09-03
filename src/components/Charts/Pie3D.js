import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const pie3D = ({data}) =>{

  const chartConfigs = {
    type: "pie3D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption:"Languages",
        theme:"fusion",
        decimals:0,
        pieRadius:'50%',

      },
      data:data,
    }
  };

  return <ReactFC {...chartConfigs} />
}

export default pie3D;