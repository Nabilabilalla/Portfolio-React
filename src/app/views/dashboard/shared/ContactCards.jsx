import { Box, Card, Fab, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
// import { format } from "date-fns";
import { Fragment } from "react";

const ProjectName = styled(Span)(({ theme }) => ({
  marginLeft: 24,
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: { marginLeft: 4 }
}));

const StarOutline = styled(Fab)(() => ({
  marginLeft: 0,
  boxShadow: "none",
  background: "#08ad6c !important",
  backgroundColor: "#0d6fbd !important"
}));

// const DateRange = styled(Fab)(({ theme }) => ({
//   marginLeft: 0,
//   boxShadow: "none",
//   color: "white !important",
//   background: `${theme.palette.error.main} !important`
// }));

const ContactCards = () => {
  //   const { palette } = useTheme();
  //   const textMuted = palette.text.secondary;

  return (
    <Fragment>
      <Card sx={{ py: 1, px: 2 }} className="project-card">
        <Box display="flex" alignItems="center">
          <StarOutline size="small">
            <Icon>call</Icon>
          </StarOutline>

          <ProjectName>06 09 07 43 76 </ProjectName>
        </Box>
      </Card>

      <Box py={1} />
      <Card sx={{ py: 1, px: 2 }} className="project-card">
        <Box display="flex" alignItems="center">
          <StarOutline size="small">
            <Icon>local_post_office</Icon>
          </StarOutline>

          <ProjectName>nabila.tantast@gmail.com</ProjectName>
        </Box>
      </Card>

      <Box py={1} />
      <Card sx={{ py: 1, px: 2 }} className="project-card">
        <Box display="flex" alignItems="center">
          <StarOutline size="small">
            <Icon>room</Icon>
          </StarOutline>

          <ProjectName>477 montée voisin, 83150 Bandol</ProjectName>
        </Box>
      </Card>

      <Box py={1} />
    </Fragment>
  );
};

export default ContactCards;
