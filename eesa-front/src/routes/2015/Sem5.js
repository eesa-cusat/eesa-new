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

import { SubjectText } from "./Sem1";

import GoToTop from "../GoToTop";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCard = styled(Card)(({ roll }) => ({
  backgroundColor: "white",
  opacity: 0.6,
}));

const Sem5 = () => {
  return (
    <Grid container direction="column" align="center">
      <HelmetProvider>
        <Helmet>
          <title>SEM 5</title>
          <meta name="description" content="Semester 5 notes" />
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
            <CustomCard
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
                  SEMESTER 5
                </Typography>
              </CardContent>
            </CustomCard>
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
              <SubjectText>NUMERICAL AND STATISTICAL METHODS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1hWMSvVwvA0F6RUTHNiYA5w-rd1ASGSkq#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>CONTROL SYSTEMS 1</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=13NgRum_diz_1naBktPr81K0mA6PX-ugG#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>
                MICROPROCESSOR AND MICROCONTROLLER BASED SYSTEMS{" "}
              </SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1T5uMGQzTleor0QanNZEnWAhVS9sjGc-9#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>POWER SYSTEMS I</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=15ltR0DpFX8dFmSKuW76-LpWTmGpsbs7p#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>LINEAR INTEGRATED CIRCUITS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1hZay5izR2m91u5zWyFhino9BiZYb-_x1#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>INTRODUCTION TO MACHINE LEARNING </SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1M6Dn6T7qoHR1KbULAt4PI6ISwK2pTAA8#list"
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
        </Typography>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ELECTRONIC CIRCUITS LAB</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=_FOLDER_ID_#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ELECTRICAL MEASUREMENTS LAB</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=_FOLDER_ID_#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>LANGUAGE LAB</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=_FOLDER_ID_#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid> */}
        <Grid item align="center" sx={{ my: "4rem" }}>
          <Button
            variant="contained"
            startIcon={<FolderSharedIcon />}
            href="https://drive.google.com/drive/folders/1Y4LU8lyZ_w3ot4aKD8GykFk7erxAcaKP?usp=share_link"
            target="_blank"
            size="large"
          >
            Add "Semester 5" to your Drive
          </Button>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Sem5;
