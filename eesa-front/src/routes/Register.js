import React from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Helmet, HelmetProvider } from "react-helmet-async";

import GoToTop from "./GoToTop";

const LibButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Quicksand",
  width: "10rem",
  "&:hover": {
    backgroundColor: "white",
  },
  [theme.breakpoints.down("md")]: {
    width: "7rem",
  },
}));

const Register = () => {
  const theme = createTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column" align="center">
      <HelmetProvider>
        <Helmet>
          <title>EESA - Register</title>
          <meta name="description" content="Register as Student/Alummni" />
        </Helmet>
      </HelmetProvider>
      <div className={matchesMD ? "reg-container2" : "reg-container"}>
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography sx={{ color: "white", fontSize: "2.5rem" }}>
                STUDENT/ALUMNI REGISTRATION
              </Typography>
            </Grid>
            <Grid item sx={{ mt: "2rem" }}>
              <Stack direction="row" spacing={4}>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewDQ-a-ZiBc9atHBQuA_KYsIZGQQsjTZqxXcuQqmS0Zh6vOQ/viewform?usp=pp_url"
                  rel="noreferrer"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  <LibButton variant="contained">STUDENT</LibButton>
                </Link>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc8T3mdaIe7I5xXBCZigHuM_orijd2f9xrJojg9TabOcH1glg/viewform?usp=pp_url"
                  rel="noreferrer"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  <LibButton variant="contained">ALUMNI</LibButton>
                </Link>
              </Stack>
            </Grid>
            <Grid item sx={{ mt: "5rem" }}>
              <Stack spacing={5}>
                <LibButton
                  sx={{ width: { xs: "20rem", lg: "20rem" } }} //20rem
                  component={RouterLink}
                  to="/studentsdata"
                >
                  Get details of students
                </LibButton>
                <LibButton
                  sx={{ width: { xs: "20rem", lg: "20rem" } }}
                  component={RouterLink}
                  to="/alumnidata"
                >
                  Get details of Alumni
                </LibButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <GoToTop />
    </Grid>
  );
};

export default Register;
