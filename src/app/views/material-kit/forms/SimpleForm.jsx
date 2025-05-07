import {
  Typography,
  Button,
  Grid,
  Icon,
  styled,
  Card,
  CardMedia,
  CardActions
} from "@mui/material";
import { Link } from "react-router-dom";
import { Span } from "app/components/Typography";
import { useState, useRef } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// eslint-disable-next-line no-unused-vars
import emailjs from "@emailjs/browser";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const SimpleForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gwmr80d", 
        "template_7scbrad",
        formData,
        "wtAIuuWb61KT03wsN" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message envoyé avec succès !");
          setFormData({
            username: "",
            name: "",
            mobile: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div>
      <ValidatorForm ref={formRef} onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="name"
              label="Nom"
              value={formData.name}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["Champ obligatoire !"]}
            />

            <TextField
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              errorMessages={["Champ obligatoire !"]}
              label="Prénom"
              validators={["required"]}
            />

            <TextField
              type="text"
              name="mobile"
              label="Numéro de téléphone"
              value={formData.mobile}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["Champ obligatoire !"]}
            />

            <TextField
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 mb-2 border"
              label="Email"
              validators={["required"]}
              errorMessages={["Champ obligatoire !", "Adresse e-mail non valide"]}
            />

            <TextField
              sx={{ mb: 4 }}
              type="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              errorMessages={["Champ obligatoire !"]}
              validators={["required"]}
              multiline
              rows={4}
            />
            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <Span sx={{ pl: 1, textTransform: "capitalize" }}>Envoyer</Span>
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={6}>
            <Card sx={{ maxWidth: 500, margin: "0 auto" }}>
              <CardMedia
                component={Link}
                to="/dashboard/default"
                alt="green iguana"
                sx={{
                  height: 200,
                  width: "100%",
                  maxWidth: 300,
                  margin: "0 auto"
                }}
                image="/assets/images/LogoNabila.svg"
              />

              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                {"\n "}
                Des idées, des questions ou un projet à discuter ? Ce formulaire est là pour
                faciliter la prise de contact. Je suis toujours curieuse d'échanger avec des
                personnes inspirantes !
              </Typography>
            

              <CardActions sx={{ justifyContent: "center", flexDirection: "column", mt: 2 }}>
                <Typography variant="h">
                  {""}
                  N'hésitez pas à jeter un œil à mon profil !
                </Typography>
                <Button
                  component={Link}
                  to="/session/signin"
                  // size="large"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    maxWidth: 200,
                    mt: 1
                  }}
                >
                  Connexion
                </Button>
                <Button
                  component={Link}
                  to="/session/signup"
                  // size="large"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                    maxWidth: 200
                  }}
                >
                  Inscription
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {status && <p className="mt-2">{status}</p>}
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
