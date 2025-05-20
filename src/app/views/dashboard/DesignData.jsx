import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  DialogContent,
  Dialog
} from "@mui/material";
import { useState } from "react";

const designData = [
  {
    title: "Maquette Figma - ENCO",
    image: "/assets/images/Enco.png",
    link: "https://www.figma.com/design/fqBWf5XyNErkCQLa3Rze0M/ENCO?t=ccgHVC4Hf9tYcwTu-0",
    type: "figma"
  },
  {
    title: "Maquette Adobe XD- SOFT",
    image: "/assets/images/soft.png",

    link: "https://xd.adobe.com/view/d441fb19-b0f6-4b99-b62e-b21a6da233a8-8112/",
    type: "Adobe XD"
  },

  {
    title: "Apteed",
    image: "/assets/images/apteed.png",
    link: "https://www.figma.com/proto/qwbXiuTpFULyIqSmPrdjvV/Untitled?node-id=1-11",
    type: "logo"
  },
  {
    title: "Maquette Figma - Poney",
    image: "/assets/images/Poney.png",
    link: "https://www.figma.com/design/HqwBsfND74xCtpkBG39jsU/Untitled?node-id=1-14&p=f&t=pg6O0Jvwv6rfLgqz-0",
    type: "logo"
  },
  {
    title: "Maquette Figma - Lune Concept",
    image: "/assets/images/luneConcept.png",
    link: "https://www.figma.com/design/https://www.figma.com/design/v3gi1kKQ3rSjRPkoJCCOZd/Untitled?t=pg6O0Jvwv6rfLgqz-0/Untitled?node-id=1-14&p=f&t=pg6O0Jvwv6rfLgqz-0",
    type: "logo"
  },
  {
    title: "Maquette Figma - Application Mobile",
    image: "/assets/images/EncoS.png",
    link: "https://www.figma.com/design/uGnurrxBM7NitJC49ClQ04/Untitled?t=ZZUOXoRjNjvgZIMs-0",
    type: "figma"
  }
];
const logoGallery = [
  "/assets/images/LogoNabila.svg",
  "/assets/images/Enco.png",
  "/assets/images/luneConcept.png",
  "/assets/images/LogoCar.png",
  "/assets/images/Syna.png",
  "/assets/images/word.png"
];

const maquette = [
  "/assets/images/stats.png",
  "/assets/images/login_ens.png",
  "/assets/images/contact_ens.png",
  "/assets/images/1000050667.jpg",
  "/assets/images/1000050668.jpg",
  "/assets/images/1000050670.jpg",
  "/assets/images/1000050671.jpg",
  "/assets/images/1000050669.jpg",
  "/assets/images/",
  "/assets/images/SHOPNAB.png"
];

const DesignGallery = () => {
  const [openImage, setOpenImage] = useState(null);

  const handleOpen = (imgSrc) => {
    setOpenImage(imgSrc);
  };

  const handleClose = () => {
    setOpenImage(null);
  };
  return (
    <Box my={4} px={2}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Mes Réalisations en Design
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {designData.map((design, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", backgroundColor: "#F9F9F9" }}>
              <CardMedia component="img" height="200" image={design.image} alt={design.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {design.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{ margin: "auto", backgroundColor: "#04255a" }}
                >
                  Voir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Logos Réalisés
        </Typography>
        <Grid container spacing={3}>
          {logoGallery.map((logo, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card>
                <CardMedia component="img" height="160" image={logo} alt={`Logo ${index + 1}`} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Maquettes Réalisés
        </Typography>
        <Grid container spacing={3}>
          {maquette.map((logo, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card>
                <CardMedia component="img" height="160" image={logo} alt={`Logo ${index + 1}`} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Maquettes Réalisés
        </Typography>
        <Grid container spacing={3}>
          {maquette.map((logo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ cursor: "pointer" }} onClick={() => handleOpen(logo)}>
                <CardMedia component="img" heigth="160" image={logo} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={!!openImage} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <img src={openImage} alt="Logo zoom" style={{ width: "100%", height: "auto" }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DesignGallery;
