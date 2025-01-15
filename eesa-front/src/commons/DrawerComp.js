import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onClick={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: "#3A3A3A", color: "white" },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/department">
            <ListItemIcon>
              <BoltIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Electrical Dept.</ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="library">
            <ListItemIcon>
              <LocalLibraryIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>EESA Library</ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="register">
            <ListItemIcon>
              <HowToRegIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Register</ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
