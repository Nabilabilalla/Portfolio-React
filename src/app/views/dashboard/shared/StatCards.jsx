import { Box, Card, Grid, Icon, styled } from "@mui/material";
import { Small } from "app/components/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

const StatCards = () => {
  const cardList = [
    { name: "Développeur Multimédia", amount: "ICADEMIE 2022-2023" },
    {
      name: "Titre Concepteur Développeurd'applications (bac+3)SIMPLON Marseille 2021-2022",
      amount: "SIMPLON Marseille 2021-2022"
    },

    { name: "Formation Anglais", amount: "Wall Street English 2021-2022 " },
    {
      name: "Titre Développeur web et web mobile (bac+2)",
      amount: "SIMPLON Marseille 2021"
    },
    { name: "Obtention Certification OPQUAST", amount: "2020" },
    { name: "Formation Initiation informatique", amount: "2018" },
    { name: "Formation Photographe", amount: "Studio Photo Hakima 2015-2017" }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>
          </StyledCard>
        </Grid>
      ))}

    </Grid>
  );
};

export default StatCards;
