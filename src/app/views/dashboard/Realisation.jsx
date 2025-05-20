import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";

const projectList = [
  {
    title: "CRM",
    image: "/assets/images/Syna.png",
    url: "http://www.kalanke.com/",
    description:
      "Un CRM développé pendant mon alternance chez Apteed (ReactJS PHP Python Django Mysql API)"
  },

  {
    title: "Site Web",
    image: "/assets/images/apteed.png",
    url: "https://apteed.fr/",
    description: "Un site développé pendant mon alternance chez Apteed (WordPress)"
  },
  {
    title: "Application Flutter",
    image: "/assets/images/1000050667.jpg",
    url: "https://play.google.com/store/apps/details?id=apteed.app.apteed_epp&hl=fr&pli=1",
    description:
      "Application mobile développé pendant mon alternance chez Apteed (Flutter API Python Django)"
  },
  {
    title: "Signature mail",
    image: "/assets/images/signature.png",
    url: "",
    description: "Signature mail développé en HTML CSS Word"
  },
  {
    title: "Site Carrelage",
    image: "/assets/images/luneConcept.png",
    url: "https://nabila-cv.netlify.app/stage/",
    description: "Site vitrine HTML/CSS/JS/PHP/API pour une société de carrelage."
  },
  {
    title: "Quiz",
    image: "/assets/images/Quiz.png",
    url: "https://agitated-mcclintock-51a6ce.netlify.app/",
    description: "Un Quiz développé en équipe (HTML CSS JavaScript)"
  },
  {
    title: "Manette Nes",
    image: "/assets/images/Nes.png",
    url: "https://nabila-cv.netlify.app/manette-nes/",
    description: "Manette Nes (HTML CSS)"
  },
  {
    title: "Site non résponsive",
    image: "/assets/images/Dimo.png",
    url: "https://nabila-cv.netlify.app/site/site",
    description: "Site Html Css"
  },
  {
    title: "Tableau",
    image: "/assets/images/Tabl.png",
    url: "https://nabila-cv.netlify.app/tableu/tableu/tableu",
    description: "Simple Tableau HTML CSS"
  },
  {
    title: "Actutu",
    image: "/assets/images/Actutu.png",
    url: "https://nabila-cv.netlify.app/evaluation/ev",
    description: "Site Html Css"
  },
  {
    title: "Météo",
    image: "/assets/images/Meteo.png",
    url: "https://nabila-cv.netlify.app/meteo/",
    description: "Météo HHTML CSS JS API"
  },
  {
    title: "Avion",
    image: "/assets/images/Avion.png",
    url: "https://nabila-cv.netlify.app/avion/",
    description: "Avion HTML CSS"
  },
  {
    title: "Animation",
    image: "/assets/images/Animation.png",
    url: "https://nabila-cv.netlify.app/animation%20solie/fiche.htmls",
    description: "Animation Html Css"
  },
  {
    title: "egghead.io",
    image: "/assets/images/RE.png",
    url: "https://nabila-cv.netlify.app/refaire/egg",
    description: "Simple Site HTML CSS"
  },
  {
    title: "Réseaux sociaux",
    image: "/assets/images/RS.png",
    url: "https://nabila-cv.netlify.app/les%20r%C3%A9seaux%20sociaux/risaux.html",
    description: "Html Css"
  },
  {
    title: "Simple Chat",
    image: "/assets/images/Chat.png",
    url: "https://nabila-cv.netlify.app/simple-chat-master/",
    description: "HHTML CSS JS"
  },
  {
    title: "CV",
    image: "/assets/images/CV.png",
    url: "https://nabila-cv.netlify.app/",
    description: "CV codé en HTML CSS"
  }
  // {
  //   title: "Portfolio Personnel",
  //   image: "/assets/images/portfolio.png",
  //   url: "https://tonportfolio.netlify.app",
  //   description: "Site personnel pour présenter mon CV, mes compétences et projets."
  // }
];

const Realiastion = () => {
  return (
    <Box my={4} px={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Mes Projets Réalisés
      </Typography>
      <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="160" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ mt: "auto", p: 2 }}>
                <Button
                  variant="contained"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                >
                  Voir le projet
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Realiastion;
