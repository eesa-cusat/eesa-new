import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import GoToTop from "./GoToTop";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Wrapper, animation } from "./StudentData";

const AlumniData = () => {
  return (
    <Grid item container direction="column">
      <div className="alumni-container">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Wrapper align="center">
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", md: "5rem" },
                  color: "white",
                  fontWeight: 900,
                  fontFamily: "Quicksand",
                }}
              >
                EESA ALUMNI DATABASE
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: { xs: "1rem", md: "2rem" },
                }}
              >
                Coming soon
              </Typography>
            </Wrapper>
          </Grid>
        </Grid>
      </div>
      {/* <Grid item alignSelf="center" sx={{ my: "2rem", width: "80%" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>2004 alumni</Typography>
          </AccordionSummary>
          <AccordionDetails align="center">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKAPtyPJ-2r2C5xh-aQuwMpV23nR1BJdjV809VHHZuLw-cjzK-s6JRY0AuBbyX3KBmKBd4r9Xx3Ju0/pubhtml?gid=1476189223&amp;single=true&amp;widget=true&amp;headers=false"
              style={{ width: "80%", height: 500 }}
            ></iframe>
          </AccordionDetails>
        </Accordion>
      </Grid> */}

      <GoToTop />
    </Grid>
  );
};

export default AlumniData;
