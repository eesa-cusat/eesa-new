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

const Sem4 = () => {
  return (
    <Grid container direction="column" align="center">
      <HelmetProvider>
        <Helmet>
          <title>SEM 4</title>
          <meta name="description" content="Semester 4 notes" />
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
                  SEMESTER 4
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
              <SubjectText>
                COMPLEX VARIABLES AND PARTIAL DIFFERENTIAL EQUATIONS
              </SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1qpdrnkMjB6F-vHCZ4WMQ4PCroyjGciXP#list"
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
                src="https://drive.google.com/embeddedfolderview?id=1znXBlyNNfbfj4U-JLpYL4GwZHRamhhYr#list"
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
                src="https://drive.google.com/embeddedfolderview?id=100e2cg4mKMPhy7LHU_ElqPfsJf504yxm#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>POWER ELECTRONICS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=18ObWfXH0xrvVO25QqSd96_Ufc9vDBwl0#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>DIGITAL ELECTRONICS</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1X3MtZftIbiVkoKgRAcSqpi0kyk_ieAGL#list"
                style={{ width: "100%", height: "500px", border: "0" }}
              ></iframe>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SubjectText>ELECTROMAGNETIC FIELD THEORY</SubjectText>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                title="googleDriveFrame"
                src="https://drive.google.com/embeddedfolderview?id=1SodQ1tw3ihglaldjA2eJDaiz2joLXByQ#list"
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
              <SubjectText>DIGITAL ELECTRONICS LAB </SubjectText>
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
              <SubjectText>ELECTRICAL MACHINES LAB I</SubjectText>
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
              <Typography>LANGUAGE LAB</Typography>
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
            href="https://drive.google.com/drive/folders/1Zap92fbErhheBy_M6QBe0tDGdkoA52Xy?usp=share_link"
            target="_blank"
            size="large"
          >
            Add "Semester 4" to your Drive
          </Button>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Sem4;
