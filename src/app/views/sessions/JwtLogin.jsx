import { LoadingButton } from "@mui/lab";
// eslint-disable-next-line no-unused-vars
import { Card, Checkbox, Button, Grid, TextField, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/material";
import { Paragraph } from "app/components/Typography";
import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)"
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center"
  }
}));

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Le mot de passe doit comporter 6 caractères")
    .required("Champ obligatoire !"),
  email: Yup.string().email("Adresse e-mail non valide").required("Champ obligatoire !")
});

const JwtLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Gestion du changement des champs
  // eslint-disable-next-line no-unused-vars
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const theme = useTheme();

  const handleSubmit = async (values, { setSubmitting }) => {
    setMessage("En cours...");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8000/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      // Récupération de la réponse JSON
      const data = await res.json();
      if (data.error) {
        setMessage(data.error);
      } else if (data.message && data.token) {
        setMessage(`${data.message} Token: ${data.token}`);
        localStorage.setItem("jwt", data.token); // Sauvegarde du JWT dans le localStorage
        navigate("/");
      } else {
        setMessage("Réponse inattendue du serveur.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <Link to="/dashboard/default">
                <img src="/assets/images/LogoNabila.svg" width="100%" alt="" />
              </Link>
            </JustifyBox>
          </Grid>
          <Grid item sm={6} xs={14}>
            <ContentBox>
              <Typography variant="h3" align="center" color="#044173">
                Connexion
              </Typography>
              <Formik
                onSubmit={handleSubmit}
                initialValues={{ email: "", password: "", remember: false }}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Mot de passe"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="space-between">
                      <LoadingButton
                        type="submit"
                        color="primary"
                        loading={isLoading}
                        variant="contained"
                        align="center"
                        sx={{ my: 2 }}
                      >
                        Connexion
                      </LoadingButton>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="primary">
                          Connexion en tant qu'invité
                        </Button>
                      </Link>
                      {/* <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Remember Me</Paragraph>
                      </FlexBox> */}
                    </FlexBox>
                    <NavLink
                      to="/session/forgot-password"
                      style={{ color: theme.palette.primary.main }}
                    >
                      Mot de passe oublié ?
                    </NavLink>

                    <Paragraph>
                      Vous n'avaez pas de compte?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Inscrez-vous
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
              <p>{message}</p>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
