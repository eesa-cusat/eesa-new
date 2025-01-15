import { styled } from "@mui/material/styles";
import React from "react";
//import { Link } from "react-router-dom";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Helmet, HelmetProvider } from "react-helmet-async";

import GoToTop from "../GoToTop";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CustomGrid = styled(Grid)({
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
});

export const SubjectText = styled(Typography)({
  fontWeight: 900,
  fontFamily: "Quicksand",
});

const Sem1 = () => {
  
  return (
    <Grid container direction="column" align="center">
      <HelmetProvider>
        <Helmet>
          <title>SEM 1</title>
          <meta name="description" content="Semester 1 notes" />
        </Helmet>
      </HelmetProvider>

      <div className="sem-container">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Grid
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
                  SEMESTER 1
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Grid
        item
        container
        direction="column"
        sx={{ my: "5rem" }}
        alignItems="center"
      >
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>CALCULUS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1ebk95VPohKoIob_qqScAnR9qT4iM0M1P#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ENGINEERING PHYSICS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1mXg8EPlAdfkPzK5D9dQcqAu9ZfFrliHX#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ELECTRONICS DEVICES & CIRCUITS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1dCgEeci5qwwXV2PJaAcZqZ5-0PcUJkwJ#list"
                style={{ width: "100%", height: "300px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>INTRODUCTION TO ELECTRICAL ENGINEERING</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1VueLv3bvCdaKPDOsCBojAq91OHJThWsJ#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>COMPUTER PROGRAMMING</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1V15M8M5ATWqGiWirwT21r2MbQtxwp-0a#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>SOFT SKILL DEVELOPMENT</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1_IuRXV0I2kEYk_4EFwbcYB9itzgK6tgm#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>COMPUTER PROGRAMMING LABORATORY</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1xdLgpcT1fGm2NxI6V22d0lolG-J1qniz#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* <Typography
          align="center"
          sx={{
            width: "80%",
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontFamily: "Quicksand",
            fontWeight: "bold",
            mt: "1rem",
            mb: "1rem",
          }}
        >
          Workshop/Lab
        </Typography> */}
        {/* <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ELECTRICAL ENGINEERING WORKSHOP</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=FOLDER_ID#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid> */}
        {/* <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>COMPUTER PROGRAMMING LAB</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=FOLDER_ID#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid> */}

        <Grid item align="center" sx={{ my: "4rem" }}>
          <Button
            variant="contained"
            startIcon={<FolderSharedIcon />}
            href="https://drive.google.com/drive/folders/1aim-9nsy34rpaCgp87mQBhGSY6zEezTS?usp=share_link"
            target="_blank"
            size="large"
          >
            Add "Semester 1" to your Drive
          </Button>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Sem1;
