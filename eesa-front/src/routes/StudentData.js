import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { theme } from "../commons/theme";

import GoToTop from "./GoToTop";

export const animation = keyframes`
  0% {opacity: 0;transform:translateY(10%)}
  100% {opacity: 1;transform:translateY(0%)}
`;

export const Wrapper = styled(Grid)`
  animation: ${animation} 3500ms ${theme.transitions.easing.easeInOut};
`;

const StudentData = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "95vh" }}
    >
      <Wrapper align="center">
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "4rem" },
            fontFamily: "Quicksand",
          }}
        >
          EESA Student Database
        </Typography>
        <Typography sx={{ fontFamily: "Quicksand" }}>Coming soon</Typography>
      </Wrapper>
      <GoToTop />
    </Grid>
  );
};

export default StudentData;
