import { useTheme } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const ComparisonChart = ({ height, color = [] }) => {
  const theme = useTheme();

  const option = {
    grid: { top: "10%", bottom: "10%", right: "5%" },
    legend: { show: false },
    color: ["#223388", "rgba(34, 51, 136, 0.8)"],
    barGap: 0,
    barMaxWidth: "64px",
    dataset: {
      source: [
        ["HTML     CSS", 85, 85],
        ["JS    VUEJS", 70, 65],
        ["JAVA   REACTNATIVE", 40, 75],
        ["PHP    PYTHON", 85, 60],
        ["REACTJS   FLUTTER", 85, 70]
      ]
    },
    xAxis: {
      type: "category",
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 9,
        fontFamily: "roboto",
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
      },
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value} %",
        fontSize: 13,
        fontFamily: "roboto",
        color: theme.palette.text.secondary
      }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }]
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option }} />;
};

export default ComparisonChart;
