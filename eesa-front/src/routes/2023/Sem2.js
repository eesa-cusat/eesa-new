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
import { SubjectText } from "./Sem1";
import { Helmet, HelmetProvider } from "react-helmet-async";

import GoToTop from "../GoToTop";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCard = styled(Card)(({ roll }) => ({
  backgroundColor: "white",
  opacity: 0.6,
}));

const Sem2 = () => {
  return (
    <Grid container direction="column" align="center">
      <HelmetProvider>
        <Helmet>
          <title>SEM 2</title>
          <meta name="description" content="Semester 2 notes" />
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
                  SEMESTER 2
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
              <SubjectText>Linear Algebra and Transform Techniques</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1FpJxDr_DY6Q3wyMsvzMkX6enfSMTcBO6#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>Engineering Chemistry</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=13YeKatuvS6yeTExSG8OnxfTh_z_iMLQe#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>Digital Electronics</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1znzJ_rhGLYFu4g6ZByudkwmJChBX2ELy#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>Object Oriented Programming in C++</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1znzJ_rhGLYFu4g6ZByudkwmJChBX2ELy#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>Introduction to Cyber Physical Systems</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1bAW8EaDFFJOsrP9eSKpUjBtkmhQuF6Oz#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>Environmental and Life Sciences</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=15YIQ-cL2GQAXzrKK9FEzwOK59bCDAaHe#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>SOFT SKILLS DEVELOPMENT</SubjectText>
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
        {/* <Typography
          align="center"
          sx={{
            width: "80%",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
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
              <SubjectText>CIVIL ENGINEERING WORKSHOP</SubjectText>
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
              <SubjectText>MECHANICAL ENGINEERING WORKSHOP</SubjectText>
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
              <SubjectText>LANGUAGE LAB</SubjectText>
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
            Add "Semester 2" to your Drive
          </Button>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Sem2;
