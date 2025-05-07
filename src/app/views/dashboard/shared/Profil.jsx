import { Card, Grid, CardMedia, Typography, Button, CardContent, Box } from "@mui/material";

const Profil = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={14} md={8}>
        <Card
          elevation={3}
          sx={{
            px: 3,
            py: 2,
            mb: 2,
            p: 2,
            display: "flex",
            // maxWidth: 1000,
            flexDirection: "row-reverse",

            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)" // Bordure subtile
            // background: "linear-gradient(90deg, #9bad85 0%, #feb47b 100%)"
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 200,
              height: 200,
              objectFit: "cover"
              // borderRadius: "50%"
            }}
            image="/assets/images/dev.png"
          />

          {/* <Title>PROFIL PROFESSIONNEL</Title> */}
          {/* <SubTitle>Last 30 days</SubTitle> */}
          <Typography
            variant="body1"
            style={{
              fontSize: "48",
              letterSpacing: "0.1em",
              lineHeight: "1.6",
              textIndent: "20px"
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2, color: "#04255a" }}>
              PROFIL PROFESSIONNEL
            </Typography>
            Passionnée par les technologies<strong> numériques</strong>, j'ai toujours intégré
            l'innovation dans ma carrière professionnelle. Après trois années en tant que
            <strong> photographe professionnelle</strong>, j'ai choisi de me réorienter vers le
            développement web.
            <br /> <br /> Fort de <strong> trois ans</strong> de formation, dont{" "}
            <strong> deux ans en entreprise</strong>, je suis à la recherche d'un poste en tant que{" "}
            <strong> développeuse web</strong>. Mon objectif est de rejoindre une structure
            dynamique où je pourrai mettre en avant mes compétences et continuer à évoluer
            techniquement.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={10} md={4}>
        <Card
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            // maxWidth: 600,
            // background: "linear-gradient(45deg, rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.6))", // Dégradé bleu avec transparence
            borderRadius: "32px", // Coins arrondis
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.3)", // Ombre douce
            backdropFilter: "blur(10px)", // Flou derrière la carte
            border: "1px solid rgba(255, 255, 255, 0.2)" // Bordure subtile
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Télécharger mon CV
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                Cliquez sur le bouton ci-dessous pour télécharger mon CV au format PDF.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="/cv.pdf" // Lien vers le fichier PDF
                download="CV Nabila" // Le nom du fichier téléchargé
                sx={{
                  borderRadius: "8px", // Coins arrondis du bouton
                  padding: "10px 20px" // Taille du bouton
                }}
              >
                Télécharger le CV
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profil;
