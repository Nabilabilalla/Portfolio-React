// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   // Divider,
//   CardActions,
//   CardMedia,
//   Button,
//   Grid,
//   DialogContent,
//   Dialog,
//   DialogTitle,
//   DialogActions
// } from "@mui/material";
// import React, { useState } from "react";

// const ExperienceSection = () => {
//   const [activeDialog, setActiveDialog] = useState(null);

//   const handleClickOpen = (id) => {
//     setActiveDialog(id);
//   };

//   const handleClose = () => {
//     setActiveDialog(null);
//   };

//   return (
//     <Box my={2}>
//       <Card sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
//         <CardContent>
//           <Typography variant="h4" component="h2" gutterBottom>
//             MES EXPÉRIENCES PROFESSIONNELLES
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Durant mon parcours, j'ai eu l'opportunité de travailler sur plusieurs projets variés.
//             J'ai développé des interfaces utilisateur modernes en utilisant plusieurs langages et
//             plusieurs utile, créé des API et collaboré en équipe Agile.
//           </Typography>
//         </CardContent>
//       </Card>
//       <Box sx={{ py: "12px" }} />

//       <Grid container spacing={2}>
//         {/* Colonne de gauche - prend 12 colonnes en mobile, 6 en desktop */}
//         <Grid item xs={12} md={6} sx={{ px: 2 }}>
//           <Card sx={{ height: "100%", backgroundColor: "#F3F2FF", color: "#04255a" }}>
//             <CardMedia sx={{ height: 140 }} image="/assets/images/apteed.png" />
//             <CardContent>
//               <Typography gutterBottom variant="h5">
//                 ALTERNANCE APTEED - 2021 - 2023
//               </Typography>
//               <Typography variant="body1">
//                 <ul style={{ marginTop: 20, marginBottom: "8px", fontSize: "1rem" }}>
//                   <li>Création d'un grand projet(un logiciel) à partir d’une feuille blanche</li>
//                   <li>Participation à la création du cahier des charges</li>
//                   <li>
//                     Création d’une maquette avec Figma et organisation des taches avec l’équipe via
//                     Teams (Création d’un ERP)
//                   </li>
//                   <li>
//                     Utilisation du ReactJS (Material UI), PHP, MYSQL, PhpMyAdmin, incluant la
//                     gestion des API et l'architecture MVC
//                   </li>
//                   <li>
//                     {" "}
//                     Création de plusieurs profils (admin,super admin, commercial) avec des
//                     statistiques liées à chaque profil.
//                   </li>
//                   <li>
//                     Lier le logiciel avec la plateforme de formation afin de récupérer les données
//                     des utilisateurs, connaître les heures de connexion ...
//                   </li>
//                   <li>
//                     Gestion des alertes, des modifications, des suppressions, des annulations ...
//                   </li>
//                   <li>
//                     {" "}
//                     Création d'une application (plateforme de formation) via Flutter et Python /
//                     Django / MYSQL / JWT pour la sécurité
//                   </li>
//                   <li>Création d'un site web en utilisant Wordpress</li>
//                   <li>Mise en ligne du site / application avec OVH</li>
//                   <li>
//                     Rédaction de documentation technique pour les utilisateurs finaux et les
//                     développeurs.
//                   </li>
//                   <li>
//                     Déploiement en production avec gestion des DNS, des certificats SSL et des
//                     backups.
//                   </li>
//                   <li>
//                     Suivi et correction des bugs post-livraison, avec gestion des tickets via Trello
//                     ou ERP.
//                   </li>
//                   <li>
//                     Réunions régulières de suivi avec les parties prenantes pour valider les
//                     livrables.
//                   </li>
//                   <li>
//                     Optimisation des performances du front-end et back-end (lazy loading, requêtes
//                     optimisées)
//                   </li>
//                   <li>Accompagnement des utilisateurs lors de la prise en main du logiciel</li>
//                 </ul>
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button
//                 onClick={() => handleClickOpen("apteed")}
//                 variant="contained"
//                 sx={buttonStyle}
//               >
//                 Plus
//               </Button>
//               <Dialog open={activeDialog === "apteed"} onClose={handleClose}>
//                 <DialogTitle>Mon Expérience chez APTEED</DialogTitle>
//                 <DialogContent>
//                   <p>
//                     Cette alternance de<strong>deux ans chez Apteed</strong> m’a permis de
//                     contribuer activement à la <strong>création d’un logiciel complet </strong> à
//                     partir d’une feuille blanche.
//                     <br />
//                     <br />
//                     J’ai participé à l’élaboration du <strong>cahier des charges</strong>, à la
//                     conception des <strong>maquettes</strong> avec{" "}
//                     <strong>Figma , et à l’organisation des tâches en équipe via Teams</strong>.
//                     <br />
//                     Le projet a été développé en{" "}
//                     <strong>ReactJS (avec Material UI) , PHP, et MySQL,Python(Django) </strong> en
//                     suivant une<strong> architecture MVC </strong>.
//                     <br /> J’ai mis en place{" "}
//                     <strong>
//                       {" "}
//                       plusieurs profils utilisateurs (admin, super admin, commercial){" "}
//                     </strong>{" "}
//                     avec des
//                     <strong>
//                       {" "}
//                       tableaux de bord personnalisés et des statistiques avancées.
//                     </strong>{" "}
//                     <br />
//                     J’ai également assuré l’interconnexion avec une plateforme de formation (via
//                     API) afin de centraliser les données d’usage, comme les heures de connexion ou
//                     les suivis d’activités.
//                     <br />
//                     <br />
//                     En parallèle, j’ai développé une{" "}
//                     <strong>
//                       {" "}
//                       application mobile en Flutter avec une API sécurisée construite avec
//                       Python/Django, MySQL et JWT.
//                     </strong>{" "}
//                     <br />
//                     <br />
//                     Enfin, j’ai aussi créé un <strong>site vitrine sous WordPress </strong>et assuré
//                     sa <strong> mise en ligne via OVH.</strong>
//                     <br />
//                     Cette expérience a
//                     <strong> renforcé mes compétences en développement full-stack</strong>, en
//                     gestion de projet et en travail collaboratif dans un contexte professionnel
//                     exigeant.
//                   </p>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleClose} color="primary">
//                     Fermer
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Colonne de droite - prend 12 en mobile, 6 en desktop */}
//         <Grid item xs={12} md={6}>
//           <Grid container direction="column" spacing={2}>
//             <Grid item>
//               <Card sx={{ backgroundColor: "#F3F2FF", color: "#04255a" }}>
//                 <CardMedia sx={{ height: 140 }} image="/assets/images/zeendoc.png" />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5">
//                     STAGE ZENIDOC - MAI 2021 - JUILLET 2021
//                   </Typography>
//                   <Typography variant="body1">
//                     <ul style={{ marginTop: 20, marginBottom: "8px", fontSize: "1rem" }}>
//                       <li>Analyse du besoin</li>
//                       <li>
//                         Création d'une application mobile pour faciliter le travail de l'entreprise
//                       </li>
//                       <li>Flutter pour le développement d’applications mobiles multiplateformes</li>
//                       <li>CodePen pour le prototypage rapide et les tests de fonctionnalités</li>
//                       <li>Trello pour la gestion de projet et la collaboration en équipe</li>
//                       <li>Gestion de la qualité du code, tests et débogage des applications</li>
//                       <li>Travail d’équipe de 4 personnes</li>
//                       <li>Mise à jour d'une application mobile existante</li>
//                     </ul>
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     onClick={() => handleClickOpen("zenidoc")}
//                     variant="contained"
//                     sx={buttonStyle}
//                   >
//                     Plus
//                   </Button>
//                   <Dialog open={activeDialog === "zenidoc"} onClose={handleClose}>
//                     <DialogTitle>Mon Expérience chez ZENIDOC</DialogTitle>
//                     <DialogContent>
//                       <p>
//                         Ce <strong>stage</strong> m’a permis de travailler sur un projet concret{" "}
//                         <strong>en équipe</strong>, de renforcer mes compétences en{" "}
//                         <strong>développement mobile avec Flutter</strong>, et de maîtriser des
//                         outils collaboratifs comme <strong>Trello et CodePen</strong>.
//                         <br />
//                         <br />
//                         J’ai appris à<strong>gérer</strong> les priorités et à travailler sous
//                         pression tout en garantissant un produit de qualité.
//                         <br /> <br /> C’était une <strong>excellente expérience</strong> qui m’a
//                         permis de comprendre l’importance de la collaboration dans un environnement
//                         de <strong>développement agile</strong>.
//                       </p>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button onClick={handleClose} color="primary">
//                         Fermer
//                       </Button>
//                     </DialogActions>
//                   </Dialog>
//                 </CardActions>
//               </Card>
//             </Grid>
//             <Grid item>
//               <Card sx={{ backgroundColor: "#F3F2FF", color: "#04255a" }}>
//                 <CardMedia sx={{ height: 140 }} image="/assets/images/luneConcept.png" />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5">
//                     STAGE WEB - OCTOBRE 2020 À DÉCEMBRE 2020
//                   </Typography>
//                   <Typography variant="body1">
//                     <ul style={{ marginTop: 20, marginBottom: "8px", fontSize: "1rem" }}>
//                       <li>Analyse du besoin d’une société de carrelage</li>
//                       <li>Maquettage de l’interface</li>
//                       <li>Suivi via Trello</li>
//                       <li>Création du logo (Photoshop)</li>
//                       <li>Site complet en HTML, CSS, JS, PHP</li>
//                       <li>Intégration de Google Maps</li>
//                     </ul>
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     onClick={() => handleClickOpen("lune")}
//                     variant="contained"
//                     sx={buttonStyle}
//                   >
//                     Plus
//                   </Button>
//                   <Dialog open={activeDialog === "lune"} onClose={handleClose}>
//                     <DialogTitle>Mon Expérience chez Lune Concept</DialogTitle>
//                     <DialogContent>
//                       <p>
//                         Ce <strong>stage</strong> m’a offert l’opportunité de gérer un{" "}
//                         <strong>projet web de A à Z</strong> dans un contexte réel.
//                         <br />
//                         <br />
//                         En autonomie, j’ai mené <strong>l’analyse des besoinse</strong>, réalisé le
//                         <strong>maquettage de l’interface</strong>, conçu un{" "}
//                         <strong>logo sur Photoshop et organisé </strong>le suivi de projet via
//                         <strong>
//                           {" "}
//                           Trello. <br /> <br />
//                           J’ai développé un site complet en HTML, CSS, PHP et JavaScript
//                         </strong>
//                         , avec l’intégration de <strong> l’API Google Maps</strong>.
//                         <br /> <br />
//                         Cette <strong> expérience</strong> m’a permis de renforcer mes compétences
//                         techniques tout en développant mon sens de l’organisation, ma rigueur et ma
//                         capacité à mener un projet de manière structurée.
//                       </p>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button onClick={handleClose} color="primary">
//                         Fermer
//                       </Button>
//                     </DialogActions>
//                   </Dialog>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// // Style du bouton
// const buttonStyle = {
//   backgroundColor: "#04255a",
//   color: "white",
//   padding: "10px 30px ",
//   borderRadius: "12px",
//   fontSize: "1rem",
//   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//   "&:hover": {
//     backgroundColor: "#004d40",
//     boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
//   }
// };

// export default ExperienceSection;
// Version améliorée et stylisée de la section Expérience
// Version améliorée et stylisée de la section Expérience
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardMedia
} from "@mui/material";
import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const [activeDialog, setActiveDialog] = useState(null);

  const handleClickOpen = (id) => {
    setActiveDialog(id);
  };

  const handleClose = () => {
    setActiveDialog(null);
  };

  return (
    <Box my={4}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#ffffff", borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          MES EXPÉRIENCES PROFESSIONNELLES
        </Typography>
        <Typography variant="body1" color="text.secondary">
          J'ai eu l'opportunité de travailler sur plusieurs projets variés mêlant UI/UX,
          développement front/back-end, et déploiement. Voici un aperçu.
        </Typography>
      </Paper>

      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {experiences.map((exp) => (
            <Grid item xs={12} md={6} key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper elevation={2} sx={{ p: 2, borderRadius: 3, backgroundColor: "#fefefe" }}>
                  <CardMedia sx={{ height: 140, borderRadius: 2 }} image={exp.image} />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <WorkIcon color="primary" /> {exp.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {exp.shortDescription}
                  </Typography>
                  <Button
                    onClick={() => handleClickOpen(exp.id)}
                    variant="contained"
                    sx={buttonStyle}
                  >
                    Plus
                  </Button>
                  <Dialog
                    fullWidth
                    maxWidth="md"
                    open={activeDialog === exp.id}
                    onClose={handleClose}
                  >
                    <DialogTitle sx={{ fontWeight: "bold" }}>{exp.title}</DialogTitle>
                    <DialogContent dividers>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {exp.fullDescription}
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Fermer
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const experiences = [
  {
    id: "apteed",
    image: "/assets/images/apteed.png",
    title: "ALTERNANCE APTEED - 2021 - 2023",
    shortDescription:
      "Participation à la création d’un logiciel complet (ERP), développement full-stack, API, Flutter et déploiement.",
    fullDescription: `Cette alternance de deux ans chez Apteed m’a permis de contribuer activement à la
       création d’un logiciel complet à partir d’une feuille blanche.
       \n\nJ’ai participé à l’élaboration du cahier des charges, à la conception des maquettes avec Figma, 
       et à l’organisation des tâches via Teams. Le projet a été développé en ReactJS (Material UI), PHP,
        MySQL et Python (Django) avec une architecture MVC.\n\nJ’ai mis en place plusieurs profils utilisateurs
         (admin, super admin, commercial) avec des dashboards personnalisés. J’ai aussi connecté le logiciel 
         à une plateforme de formation pour récupérer des données (connexions, stats...).\n\nUne app mobile 
         a été créée avec Flutter + backend Django sécurisé par JWT. En parallèle, j’ai aussi mis en ligne 
         un site WordPress via OVH.\n\nExpérience complète de développement, 
      déploiement, suivi de bugs, documentation technique et accompagnement utilisateur.`
  },
  {
    id: "zenidoc",
    image: "/assets/images/zeendoc.png",
    title: "STAGE ZENIDOC - MAI 2021 - JUILLET 2021",
    shortDescription:
      "Développement d’une application mobile en Flutter, collaboration en équipe Agile, gestion de projet avec Trello.",
    fullDescription: `Stage de 3 mois où j’ai développé une application mobile Flutter pour améliorer l'efficacité interne. Utilisation de Trello pour le suivi de projet, CodePen pour les prototypes rapides.\n\nTravail d’équipe, gestion de la qualité du code, et mise à jour d’une application existante. Cela m’a permis d’améliorer mes compétences en développement mobile et gestion de projet.`
  },
  {
    id: "lune",
    image: "/assets/images/luneConcept.png",
    title: "STAGE WEB - OCTOBRE 2020 À DÉCEMBRE 2020",
    shortDescription:
      "Projet web complet : analyse du besoin, maquettage, développement HTML/CSS/JS/PHP, création logo, Google Maps.",
    fullDescription: `Ce stage m’a offert l’opportunité de gérer un projet web de A à Z. En autonomie, j’ai mené l’analyse du besoin, réalisé les maquettes, conçu le logo sur Photoshop, et utilisé Trello pour organiser le projet.\n\nDéveloppement d’un site complet en HTML, CSS, JS et PHP, avec intégration de Google Maps. J’ai renforcé mes compétences techniques tout en développant rigueur et autonomie.`
  }
];

const buttonStyle = {
  mt: 2,
  backgroundColor: "#04255a",
  color: "white",
  padding: "8px 20px",
  borderRadius: "12px",
  fontSize: "0.9rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#004d40",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
  }
};

export default ExperienceSection;
