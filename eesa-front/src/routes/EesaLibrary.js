import React, { useState, useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { theme } from "../commons/theme";
import { Helmet, HelmetProvider } from "react-helmet-async";

import GoToTop from "./GoToTop";

import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";

const animation = keyframes`
  0% {opacity: 0;transform:translateY(10%)}
  100% {opacity: 1;transform:translateY(0%)}
`;

const Wrapper = styled(Grid)`
  animation: ${animation} 1500ms ${theme.transitions.easing.easeInOut};
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const LibButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  width: "10rem",
  "&:hover": {
    backgroundColor: "white",
  },
  [theme.breakpoints.down("md")]: {
    width: "7rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "5rem",
    fontSize: "0.75rem",
  },
}));

const EesaLibrary = () => {
  const [selectedScheme, setSelectedScheme] = useState(() => {
    // Retrieve the selected scheme from sessionStorage if it exists
    return sessionStorage.getItem("selectedScheme") || null;
  });
  const getNotes = useRef(null);

  useEffect(() => {
    // Save the selected scheme to sessionStorage whenever it changes
    if (selectedScheme) {
      sessionStorage.setItem("selectedScheme", selectedScheme);
    }
  }, [selectedScheme]);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleSchemeSelect = (scheme) => {
    setSelectedScheme(scheme);
    scrollToSection(getNotes);
  };

  return (
    <Grid container direction="column">
      <HelmetProvider>
        <Helmet>
          <title>EESA Library</title>
          <meta
            name="description"
            content="Get notes of Electrical Engineering"
          />
        </Helmet>
      </HelmetProvider>
      <div className="library-container">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Wrapper
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Card
              variant="outlined"
              sx={{ backgroundColor: "white", opacity: 0.6 }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: { xs: "2.5rem", md: "6rem" },
                    color: "black",
                    fontWeight: 900,
                    fontFamily: "Quicksand",
                  }}
                >
                  EESA LIBRARY
                </Typography>
              </CardContent>
            </Card>
            <Grid item sx={{ mt: "2rem" }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Link
                  sx={{ textDecoration: "none" }}
                  href=""
                  rel="noreferrer"
                  target="_blank"
                >
                  <LibButton variant="contained">Share notes</LibButton>
                </Link>
                <LibButton
                  variant="contained"
                  onClick={() => {
                    scrollToSection(getNotes);
                  }}
                >
                  Get notes
                </LibButton>
              </Stack>
            </Grid>
          </Wrapper>
        </Grid>
      </div>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        ref={getNotes}
      >
        {!selectedScheme ? (
          <>
            <Grid item align="center" sx={{ mt: "2rem" }}>
              <Typography
                sx={{
                  width: "80%",
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  mt: "1rem",
                  mb: "1rem",
                }}
              >
                Syllabus
              </Typography>
            </Grid>
            <Grid item align="center" sx={{ mb: { xs: "3rem", md: "0rem" } }}>
              <Stack direction="row" spacing={4} align="center">
                <Link
                  href="https://drive.google.com/file/d/14b-AHzmJLrowZn7ztIuvaqPqpFYLaaIq/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained">2015 SCHEME</Button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1rNnWRlDwdzkAIZb0mLYhNzsDziBghQVq/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained">2019 SCHEME</Button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1wMLVw7v37GJBGIPayUEhlnK-ORpvjYwr/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained">2023 SCHEME</Button>
                </Link>
              </Stack>
            </Grid>
            <Grid item align="center" sx={{ mt: "2rem" }}>
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  mt: "1rem",
                  mb: "1rem",
                }}
              >
                Select Scheme
              </Typography>
            </Grid>
            <Grid item align="center" sx={{ mb: { xs: "3rem", md: "5rem" } }}>
              <Stack direction="row" spacing={4} align="center">
                <Button variant="contained" onClick={() => handleSchemeSelect("2015")}>
                  2015 SCHEME
                </Button>
                <Button variant="contained" onClick={() => handleSchemeSelect("2019")}>
                  2019 SCHEME
                </Button>
                <Button variant="contained" onClick={() => handleSchemeSelect("2023")}>
                  2023 SCHEME
                </Button>
              </Stack>
            </Grid>
          </>
        ) : (
          <>
            {selectedScheme === "2015" && (
              <Grid item align="center" sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    width: "80%",
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    mt: "1rem",
                    mb: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Select your Semester
                </Typography>
              </Grid>
            )}
            {selectedScheme === "2019" && (
              <Grid item align="center" sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    width: "80%",
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    mt: "1rem",
                    mb: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Select your Semester
                </Typography>
              </Grid>
            )}
            {selectedScheme === "2023" && (
              <Grid item align="center" sx={{ mt: "2rem" }}>
                <Typography
                  sx={{
                    width: "80%",
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    mt: "1rem",
                    mb: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Select your Semester
                </Typography>
              </Grid>
            )}
            <Grid item sx={{ mb: "10rem" }}>
              <Grid item container direction="row">
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem1`}>
                    <Filter1Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem2`}>
                    <Filter2Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem3`}>
                    <Filter3Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem4`}>
                    <Filter4Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item container direction="row" sx={{ mb: "5rem" }}>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem5`}>
                    <Filter5Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem6`}>
                    <Filter6Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem7`}>
                    <Filter7Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <IconButton component={RouterLink} to={`/${selectedScheme.toLowerCase()}/sem8`}>
                    <Filter8Icon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default EesaLibrary;
