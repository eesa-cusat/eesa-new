import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { createTheme, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { default as React } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../App.css";

import logoeesa from "../assets/logoeesa.png";

import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontFamily: "QuickSand",
  fontWeight: 500,
}));

const Footer = (props) => {
  //const [value, setValue] = useState();
  const theme = createTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "#3A3A3A",
      }} /*3A3A3A */
    >
      <Grid
        item
        container
        direction="column"
        alignSelf="center"
        sx={{ width: "90%" }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent={matchesMD ? "center" : "left"}
        >
          <Grid item>
            <img style={{ height: "5rem" }} src={logoeesa} />
          </Grid>
          <Grid item sx={{ ml: "1%" }}>
            <Typography
              sx={{
                mt: "2rem",
                color: "white",
                fontSize: "1.5rem",
                fontFamily: "Quicksand",
                fontWeight: "bold",
              }}
            >
              EESA CUSAT
            </Typography>{" "}
          </Grid>
        </Grid>
        {matchesMD ? (
          <>
            <Grid item align="center">
              <Typography sx={{ color: "white", fontFamily: "Quicksand" }}>
                Cochin University of Science and Technology,
                <br /> University Road, South Kalamassery, Kochi, Kerala 682022
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item container direction="row">
              <Grid item sx={{ width: "20%" }}>
                <Typography sx={{ color: "white", fontFamily: "Quicksand" }}>
                  Cochin University of Science and Technology,
                  <br /> University Road, South Kalamassery, Kochi, Kerala
                  682022
                </Typography>
                <Typography sx={{ color: "white", fontFamily: "Quicksand" }}>
                  eesa@cusat.ac.in
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                sx={{ width: "75%", ml: "5%" }}
              >
                <Grid item xs>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/"
                      onClick={() => {
                        props.setValue(0);
                      }}
                    >
                      Home
                    </FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/department"
                      onClick={() => {
                        props.setValue(1);
                      }}
                    >
                      Department
                    </FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/library"
                      onClick={() => {
                        props.setValue(2);
                      }}
                    >
                      EESA library
                    </FooterButton>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/about"
                      onClick={() => {
                        props.setValue(4);
                      }}
                    >
                      About Us
                    </FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton>Contact Us</FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton>Share notes</FooterButton>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/department"
                      onClick={() => {
                        props.setValue(1);
                      }}
                    >
                      Faculty
                    </FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="/alumnidata"
                      onClick={() => {
                        props.setValue();
                      }}
                    >
                      Alumni
                    </FooterButton>
                  </Grid>
                  <Grid item>
                    <FooterButton
                      component={RouterLink}
                      to="studentsdata"
                      onClick={() => {
                        props.setValue();
                      }}
                    >
                      Students
                    </FooterButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}

        <Grid item align="center" sx={{ mt: "2rem" }}>
          <Typography sx={{ color: "white", fontFamily: "Quicksand" }}>
            Connect with us
          </Typography>
          <IconButton
            onClick={() => (window.location = "mailto: eesa@cusat.ac.in")}
          >
            <GoogleIcon sx={{ color: "white", m: "0.5rem" }} />
          </IconButton>

          <Link
            href="https://www.instagram.com/eesa.cusat/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <InstagramIcon sx={{ color: "white", m: "0.5rem" }} />
            </IconButton>
          </Link>
          <Link
            href="https://linkedin.com/in/electrical-engineering-students-association-352432207"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <LinkedInIcon sx={{ color: "white", m: "0.5rem" }} />
            </IconButton>
          </Link>
        </Grid>
        <Grid item align="center">
          <Divider color="white" alignSelf="center" sx={{ width: "60%" }} />
        </Grid>
        <Grid item align="center" sx={{ my: "0.5rem" }}>
          <Typography sx={{ color: "white", fontFamily: "Quicksand" }}>
            © 2022-23 EESA Technical Team
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
