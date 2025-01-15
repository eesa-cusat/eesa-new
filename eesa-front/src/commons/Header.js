import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect,  } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import DrawerComp from "./DrawerComp";

import logoeesa from "../assets/logoeesa.png";

const Header = (props) => {
  const theme = createTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (window.location.pathname === "/" && props.value !== 0) {
      props.setValue(0);
    } else if (
      window.location.pathname === "/department" &&
      props.value !== 1
    ) {
      props.setValue(1);
    } else if (window.location.pathname === "/library" && props.value !== 2) {
      props.setValue(2);
    } else if (window.location.pathname === "/register" && props.value !== 3) {
      props.setValue(3);
    } else if (window.location.pathname === "/about" && props.value !== 4) {
      props.setValue(4);
    }
  }, [props.value, props]);

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#3A3A3A" }}>
      <Toolbar disableGutters>
        <Grid container direction="row" alignItems="center">
          <Grid
            item
            component={Link}
            to="/"
            onClick={() => {
              props.setValue(0);
            }}
          >
            <img style={{ height: "5rem" }} src={logoeesa} alt="EESA LOGO" />
          </Grid>
          <Grid
            item
            onClick={() => {
              props.setValue(0);
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              EESA CUSAT
            </Link>
          </Grid>
          {matchesMD ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Grid
                item
                container
                direction="row"
                sx={{ width: "50%", marginLeft: "auto" }}
              >
                <Tabs
                  textColor="inherit"
                  indicatorColor="secondary"
                  value={props.value}
                  onChange={(e, value) => props.setValue(value)}
                  sx={{ marginLeft: "auto", mr: "1rem" }}
                >
                  <Tab label="Home" component={Link} to={"/"} />
                  <Tab
                    label="Electrical dept."
                    component={Link}
                    to={"/department"}
                  />
                  <Tab label="EESA Library" component={Link} to={"/library"} />
                  <Tab label="Registration" component={Link} to={"/register"} />
                  <Tab label="About Us " component={Link} to={"/about"} />
                </Tabs>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
