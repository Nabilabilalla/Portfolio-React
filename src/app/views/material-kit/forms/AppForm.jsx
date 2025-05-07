import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import React from "react";
import { Grid, IconButton } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import StepperForm from "./StepperForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const AppForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Formulaire", path: "/material" }, { name: "Contact" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Contactez-moi">
          <SimpleForm />
        </SimpleCard>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Réseaux Sociaux */}
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                {/* <Typography variant="h6">Suivez-moi :</Typography> */}
                <IconButton href="nabila.tantast@gmail.com" color="primary" aria-label="email">
                  <SiGmail size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://github.com/Nabilabilalla"
                  target="_blank"
                  color="primary"
                  aria-label="Github"
                >
                  <FaGithub size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.linkedin.com/in/nabila-tantast-816683198/"
                  target="_blank"
                  color="primary"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={30} />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  href="https://www.facebook.com"
                  target="_blank"
                  color="primary"
                  aria-label="Facebook"
                >
                  <FaFacebook size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.instagram.com"
                  target="_blank"
                  color="primary"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  color="primary"
                  aria-label="Twitter"
                >
                  <FaTwitter size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.youtube.com"
                  target="_blank"
                  color="primary"
                  aria-label="Youtube"
                >
                  <FaYoutube size={30} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard> */}
      </Stack>
    </Container>
  );
};

export default AppForm;
