import { Grid, styled, useTheme, Box } from "@mui/material";
import { Fragment } from "react";
// import Campaigns from "./shared/Campaigns";
import SimpleCard from "app/components/SimpleCard";
// import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import TopSellingTable from "./shared/TopSellingTable";
import Profil from "./shared/Profil";
import ComparisonChart from "../charts/echarts/ComparisonChart";
import DoughnutChart from "./shared/Doughnut";
import PieChartLangues from "../charts/echarts/PieChartLangues";
import HobbiesChart from "../charts/echarts/HobbiesChart";
// import ExperienceSection from "../charts/echarts/ExperienceSection";
// import { PieChart } from "@mui/x-charts/PieChart";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

// const H4 = styled("h4")(({ theme }) => ({
//   fontSize: "1rem",
//   fontWeight: "500",
//   marginBottom: "16px",
//   textTransform: "capitalize",
//   color: theme.palette.text.secondary
// }));

const Analytics = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Profil />
          <StatCards2 />
          <Grid item xs={12} md={9}>
            <SimpleCard title=" Langages">
              <ComparisonChart
                height="300px"
                color={[theme.palette.primary.dark, theme.palette.primary.light]}
              />
            </SimpleCard>
          </Grid>
          {/* <Grid container spacing={2}></Grid> */}

          <Box sx={{ py: "12px" }} />
          <Grid container spacing={2}>
            <Grid item md={4}>
              <SimpleCard title="Langues parlées">
                <PieChartLangues />
              </SimpleCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <SimpleCard title="Systèmes d'Exploitation">
                <DoughnutChart
                  height="350px"
                  color={[
                    theme.palette.primary.dark,
                    theme.palette.primary.main,
                    theme.palette.primary.light
                  ]}
                />
              </SimpleCard>
            </Grid>
            <Box sx={{ py: "12px" }} />
            <Grid item xs={12} md={4}>
              <SimpleCard title="Mes Hobbies">
                <HobbiesChart />
              </SimpleCard>
            </Grid>

            {/* <H4>Ongoing Projects</H4>
              <RowCards /> */}

            {/* <ContactCards /> */}
          </Grid>
          <Box sx={{ py: "12px" }} />
          <Grid item xs={12} md={8}>
            <TopSellingTable />
            {/* <SimpleCard title="Doughnut Chart"> */}
          </Grid>
        </Grid>
        {/* <ExperienceSection /> */}
        {/* <UpgradeCard /> */}
        {/* <Campaigns /> */}
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
