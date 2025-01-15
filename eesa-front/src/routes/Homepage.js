import React from "react";
import "./style.css";
import { Link } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { theme } from "../commons/theme";

import GoToTop from "./GoToTop";

export const animation = keyframes`
  0% {opacity: 0;transform:translateY(10%)}
  100% {opacity: 1;transform:translateY(0%)}
`;

export const Wrapper = styled(Grid)`
  animation: ${animation} 1500ms ${theme.transitions.easing.easeInOut};
`;

// const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -200));
// const FadeDown = batch(FadeOut(), FadeIn());
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const customAnimation = batch(FadeIn(), StickyOut());

const Homepage = () => {
  return (
    <Grid container direction="column">
      <div className="main-container">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Wrapper
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                mb: "3rem",
                mt: { md: "-10rem", xs: "-1rem" },
                color: "white",
                fontWeight: 500,
                fontFamily: "Quicksand",
              }}
              align="center"
            >
              Welcome to the official website of
            </Typography>
            <Typography
              sx={{
                //mt: "2rem",
                fontSize: "2.5rem",
                fontWeight: 600,
                fontFamily: "Quicksand",
                color: "white",
                width: "70%",
              }}
              align="center"
            >
              ELECTRICAL ENGINEERING STUDENTS ASSOCIATION OF CUSAT
            </Typography>
          </Wrapper>
        </Grid>{" "}
      </div>
      <Grid container direction="column">
        <Grid item align="center">
          <Typography
            sx={{
              mt: "5rem",
              ml: "5%",
              mr: "5%",
              fontFamily: "Quicksand",
              fontWeight: 600,
            }}
          >
            The journey of EESA- Electrical Engineering Students Association,
            CUSAT started from 2004 when the first batch of EEE joined hands for
            Academic as well as Co-curricular enhancement of its students. An
            Initiative to make the students more Professional and Enthusiastic.
            EESA set its sight to upgrade the Technical, being Organised,
            Communication, Problem Solving, Leadership and Management Skills of
            the students by conducting assorted Events and Competitions.
            Counting on the Achievements that EESA had put on the table includes
            the first tech fest of EEE ‘Xystus 2005’, enormous contributions in
            'Xplendor 2010’, ‘Dhishna’, ‘Sparkle’-the EEE magazine, Alumini meet
            2013, numerous Career and Job Orientation programmes etc. Even in
            the midst of Covid19 EESA didn’t fail to Impress us with workshops
            on EVs, MATLAB, Robotics, Python, webinar series in association with
            Aluminis and lot more which results in Amazing Placement drive in
            the Electrical Department.
          </Typography>

          <Typography
            sx={{
              mt: "5rem",
              ml: "5%",
              mr: "5%",
              fontFamily: "Quicksand",
              fontWeight: 600,
            }}
          >
            Power is gained by sharing knowledge, not hoarding it.
          </Typography>
        </Grid>

        <Grid item align="center" sx={{ my: "4rem" }}>
          <Link
            sx={{ textDecoration: "none" }}
            href="https://forms.gle/2L4PuhPGqaK2AwyH6"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="contained">Share notes</Button>
          </Link>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Homepage;

/*DUMMY TEXT
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

*/
