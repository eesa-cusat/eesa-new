import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../App.css";
import { theme } from "../commons/theme";
import GoToTop from "./GoToTop";

const animation = keyframes`
  0% {opacity: 0;transform:translateY(10%)}
  100% {opacity: 1;transform:translateY(0%)}
`;

const Wrapper = styled(Grid)`
  animation: ${animation} 1500ms ${theme.transitions.easing.easeInOut};
`;

const columns = [
  { 
    field: "name", 
    headerName: "Name", 
    flex: 1,
    minWidth: 200,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: "designation",
    headerName: "Designation",
    flex: 1,
    minWidth: 180,
    headerAlign: 'center',
    align: 'center',
  },
  { 
    field: "contact", 
    headerName: "Contact", 
    flex: 1,
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
  },
  { 
    field: "email", 
    headerName: "Email", 
    flex: 1.5,
    minWidth: 230,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  {
    id: "1",
    name: "Dr. Asha Elizabeth Daniel",
    designation: "Professor",
    contact: "9446128079",
    email: "mathewpalal@gmail.com",
  },
  {
    id: "2",
    name: "Dr. Latha P G",
    designation: "Assoc. Professor",
    contact: "9446147780",
    email: "pglatha@gmail.com",
  },
  {
    id: "3",
    name: "Ms. Sheena K M",
    designation: "Assoc. Professor",
    contact: "9495970110",
    email: "sheenameerankunju@gmail.com",
  },
  {
    id: "4",
    name: "Dr. K Vinida",
    designation: "Asst. Professor",
    contact: "9446535296",
    email: "vinida@cusat.ac.in",
  },
  {
    id: "5",
    name: "Ms. Sanjna Salim",
    designation: "Asst. Professor",
    contact: "7025990589",
    email: "sanjnazif@cusat.ac.in",
  },
  {
    id: "6",
    name: "Ms. Rosamma Thomas",
    designation: "Asst. Professor",
    contact: "9495848456",
    email: "rosamma.tk@gmail.com",
  },
  {
    id: "7",
    name: "Ms. Suprina S",
    designation: "Asst. Professor",
    contact: "7907568165",
    email: "ssuprina@gmail.com",
  },

  {
    id: "8",
    name: "Ms. Ragi R Menon",
    designation: "Asst. Professor",
    contact: "9846828982",
    email: "ragirmenon@gmail.com",
  },
  {
    id: "9",
    name: "Ms. Anju G Pillai",
    designation: "Asst. Professor",
    contact: "7907616641",
    email: "anjugpillai@gmail.com",
  },
  {
    id: "10",
    name: "Ms. Neethu Muraly",
    designation: "Asst. Professor",
    contact: "9495840879",
    email: "neethumuraly@gmail.com",
  },
  {
    id: "11",
    name: "Ms. Ankita M R",
    designation: "Asst. Professor",
    contact: "9400605543",
    email: "ankithaharin@gmail.com",
  },

  {
    id: "12",
    name: "Dr. Haseena H",
    designation: "Asst. Professor",
    contact: "9495323762",
    email: "haseenahamsa@gmail.com",
  },
  {
    id: "13",
    name: "Ms. Misha K M",
    designation: "Asst. Professor",
    contact: "9567913675",
    email: "mishakm.007@gmail.com",
  },
  {
    id: "14",
    name: "Ms. Mitra P S",
    designation: "Asst. Professor",
    contact: "8075535500",
    email: "mithraps22@gmail.com",
  },
  {
    id: "15",
    name: "Ms. Reshma K Jayan",
    designation: "Asst. Professor",
    contact: "8281045218",
    email: "reshmakjayan@gmail.com",
  },
  {
    id: "16",
    name: "Mr. Jithin Jose",
    designation: "Asst. Professor",
    contact: "9633046990",
    email: "jithinjose@cusat.ac.in",
  },
];

const Department = () => {
  return (
    <Grid container direction="column">
      <HelmetProvider>
        <Helmet>
          <title>Electrical Department</title>
          <meta
            name="description"
            content="Division of Electrical and Electronics Engineering"
          />
        </Helmet>
      </HelmetProvider>

      <div className="dep-container">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Wrapper
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              align="center"
              sx={{
                mt: "-6rem",
                color: "white",
                width: { xs: "90%", md: "85%", lg: "70%" },
                fontSize: "3rem",
                fontFamily: "Quicksand",
              }}
            >
              Department of Electrical and Electronics Engineering
            </Typography>
          </Wrapper>
        </Grid>
      </div>
      <Grid container direction="column" sx={{ mt: "3rem" }}>
        <Grid item align="center">
          <Typography
            sx={{
              fontSize: "3rem",
              fontFamily: "Quicksand",
              fontWeight: "bold",
              mt: "1rem",
            }}
          >
            About Electrical Department
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", md: "75%" },
              fontFamily: "Quicksand",
              fontWeight: "500",
            }}
          >
            The Division of Electrical Engineering(EE) was established with the
            objective of imparting quality education in the field of Electrical
            Engineering. The division offers B.Tech, M.Tech and Ph.D. programmes
            in Electrical and Electronics Engineering. EE division has all the
            amenities for students to Innovate and become entrepreneurs to serve
            the community. The division creates new generation engineers capable
            of becoming leaders in industry, government and academia.
            <br /> The division also provides excellent research ambience and
            has good track record in terms of research publication and number of
            Ph.D.s produced. The curriculum for the under graduate and post
            graduate programmes are regularly reviewed and updated to suit the
            changing needs of the industry. The division strives continuously to
            impart professionalism to budding technocrats by providing quality
            education. It is evident from the fact that most of our students got
            selected into topmost MNCs through campus placement and many of them
            opt for higher studies in world renowned institutes both in India
            and abroad. EE Division is bestowed with rich and diverse alumni
            working at various corners of the world. The alumni association is
            very active and keen in maintaining intra college ties and also
            plays a remarkable role in conducting college fests and sharing
            resources for the students.
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              fontFamily: "Quicksand",
              fontWeight: "bold",
              mt: "2rem",
            }}
          >
            Vision
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", md: "75%" },
              fontFamily: "Quicksand",
              fontWeight: "500",
            }}
          >
            To impart professionalism to budding technocrats by providing
            quality education and mould young minds to be technically competent,
            morally upright and socially committed citizens of the country
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              fontFamily: "Quicksand",
              fontWeight: "bold",
              mt: "2rem",
            }}
          >
            Mission
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", md: "75%" },
              fontFamily: "Quicksand",
              fontWeight: "500",
              mb: "2rem",
            }}
          >
            To be a centre of excellence in Electrical and Electronics
            Engineering for the upliftment of mankind by imparting quality
            education. <br />
            To provide innovative solutions to Electrical Engineering problems
            and energy crisis to solve socio - economic challenges faced by the
            society .
          </Typography>
        </Grid>
        <Grid item align="center">
          <Typography
            sx={{
              fontSize: "3rem",
              fontFamily: "Quicksand",
              fontWeight: "bold",
              mt: "2rem",
            }}
          >
            Faculty
          </Typography>
        </Grid>
        <Grid 
          item 
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', padding: '20px' }}
        >
          <Box sx={{ 
            height: 'auto', 
            width: '90%',
            maxWidth: '1200px',
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #eee',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#fafafa',
              borderBottom: '2px solid #ddd',
            }
          }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              disableColumnMenu
              disableSelectionOnClick
              pageSize={16}
              rowsPerPageOptions={[16]}
              sx={{
                boxShadow: 2,
                borderRadius: 2,
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default Department;
