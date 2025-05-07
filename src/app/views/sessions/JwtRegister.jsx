import { useTheme } from "@emotion/react";
import { LoadingButton } from "@mui/lab";
import { Card, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Paragraph } from "app/components/Typography";
import { Formik } from "formik";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(JustifyBox)(() => ({
  height: "100%",
  padding: "32px",
  background: "rgba(0, 0, 0, 0.01)"
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
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
// eslint-disable-next-line no-unused-vars
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string().email("Invalid Email address").required("Email is required!")
});

function JwtRegister() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  // 👉 Nouveau handler pour soumettre les valeurs depuis Formik
  const handleFormSubmit = async (values) => {
    setMessage("En cours...");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      if (data.error) {
        setMessage(data.error);
      } else if (data.message && data.token) {
        setMessage(`${data.message} Token: ${data.token}`);
        localStorage.setItem("jwt", data.token);
        navigate("/");
      } else {
        setMessage("Réponse inattendue du serveur.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Link to="/dashboard/default">
                <img width="100%" alt="Register" src="/assets/images/LogoNabila.svg" />
              </Link>
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Typography variant="h3" align="center" color="#044173">
                Inscription
              </Typography>

              <Formik
                initialValues={{ name: "", email: "", password: "", remember: false }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required("Champ obligatoire !"),
                  email: Yup.string()
                    .email("Adresse e-mail non valide")
                    .required("Champ obligatoire !"),
                  password: Yup.string()
                    .min(6, "Le mot de passe doit comporter 6 caractères")
                    .required("Champ obligatoire !")
                })}
                onSubmit={handleFormSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="name"
                      label="Nom"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      sx={{ mb: 3 }}
                    />

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
                      sx={{ mb: 2 }}
                    />

                    <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />
                      <Paragraph fontSize={13}>
                        J'ai lu et j'accepte les conditions d'utilisation.
                      </Paragraph>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={isLoading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      S'inscrire
                    </LoadingButton>

                    <Paragraph>
                      Avez-vous un compte ?
                      <NavLink
                        to="/session/signin"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Connexion
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
              <p>{message}</p>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
}

export default JwtRegister;
