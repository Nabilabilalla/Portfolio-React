import ReactEcharts from "echarts-for-react";

const HobbiesChart = () => {
  const option = {
    title: {
      //   text: "Répartition des Hobbies",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333"
      }
    },
    legend: {
      orient: "horizontal",
      left: "center",
      bottom: 10,
      itemGap: 20,
      textStyle: {
        fontSize: 15
      }
    },
    series: [
      {
        name: "Hobbies",
        type: "pie",
        radius: "70%",
        center: ["50%", "40%"],
        data: [
          { value: 40, name: "Musique" },
          { value: 30, name: "Sport" },
          { value: 20, name: "Jeux Vidéo" },
          { value: 10, name: "Lecture" }
        ],
        label: {
          show: false, //  Garde les labels si tu veux
          position: "inside" // ou "outside" si tu veux à l'extérieur mais sans branche
        },
        labelLine: {
          show: false // Masque les branches (lignes entre le secteur et l'étiquette)
        }
      }
    ],
    color: ["#FF6347", "#FFD700", "#32CD32", "#6495ED"] // Personnalisation des couleurs
  };

  return <ReactEcharts option={option} style={{ height: "350px" }} />;
};

export default HobbiesChart;
