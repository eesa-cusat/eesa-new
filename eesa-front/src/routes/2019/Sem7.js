import { styled } from "@mui/material/styles";
import React from "react";
//import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import GoToTop from "../GoToTop";

const CustomCard = styled(Card)(({ roll }) => ({
  backgroundColor: "white",
  opacity: 0.6,
}));

const Sem7 = () => {
  return (
    <Grid container direction="column" align="center">
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
                  SEMESTER 7
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
        alignItems="center"
        justifyContent="center"
        sx={{ height: "15rem" }}
      >
        <Typography sx={{ fontSize: "2rem", fontFamily: "Quicksand" }}>
          Notes will be uploaded soon...
        </Typography>
      </Grid>
      {/* <Grid
        item
        container
        direction="column"
        sx={{ my: "5rem" }}
        alignItems="center"
      >
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>
                COMPLEX VARIABLES AND PARTIAL DIFFERENTIAL EQUATIONS
              </SubjectText>
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
              <SubjectText>CIRCUITS, SIGNALS & SYSTEMS</SubjectText>
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
              <SubjectText>ELECTRICAL MACHINES II </SubjectText>
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
              <SubjectText>
                ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS
              </SubjectText>
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
              <SubjectText>ELECTRONIC DEVICES AND CIRCUITS</SubjectText>
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
              <SubjectText>ELECTRICAL ENGINEERING MATERIALS</SubjectText>
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
        <Typography
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
        </Grid>
      </Grid> */}
      <GoToTop />
    </Grid>
  );
};

export default Sem7;
