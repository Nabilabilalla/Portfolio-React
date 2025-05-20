import React from "react";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "@mui/material";

const PieChartLangues = () => {
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)"
    },

    legend: {
      orient: "horizontal",
      left: "center",
      bottom: 10,
      itemGap: 20,
      textStyle: {
        fontSize: 15
      },
      data: ["Français", "Arabe", "Anglais", "Kabyle"]
    },
    color: [theme.palette.primary.main, theme.palette.secondary.main, "#FFA500", "#8A2BE2"],
    series: [
      {
        name: "Langues",
        type: "pie",
        radius: "70%",
        center: ["50%", "40%"],
        labelLine: {
          show: false // Cache les lignes qui sortent du cercle
        },
        label: {
          show: true, //  Garde les labels si tu veux
          position: "inside" // ou "outside" si tu veux à l'extérieur mais sans branche
        },

        data: [
          { value: 80, name: "Français" },
          { value: 60, name: "Arabe" },
          { value: 60, name: "Anglais" },
          { value: 100, name: "Kabyle" }
        ],

        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  return <ReactEcharts option={option} style={{ height: "350px" }} />;
};

export default PieChartLangues;
