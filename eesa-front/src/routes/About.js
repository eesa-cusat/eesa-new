import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { Helmet } from "react-helmet";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GoToTop from "./GoToTop";

// import profile_img from "../assets/profile_img.jpeg";
import alumnih1 from "../assets/alumnih1.jpg";
import alumnih2 from "../assets/alumnih2.jpg";
import alumnih3 from "../assets/alumnih3.jpg";
import arts_head1 from "../assets/arts_head1.jpg";
import arts_head2 from "../assets/arts_head2.JPG";
import content from "../assets/content.jpg";
import coordinator from "../assets/coordinator.jpg";
import execom1 from "../assets/execom1.JPG";
import execom2 from "../assets/execom2.jpg";
import execom3 from "../assets/execom3.jpg";
import hod from "../assets/hod.png";
import joint_secretary1 from "../assets/joint_secretary1.jpg";
import joint_secretary2 from "../assets/joint_secretary2.jpg";
import media_head from "../assets/media_head.jpg";
import president from "../assets/president.jpeg";
import public_relations1 from "../assets/public_relations1.jpeg";
import public_relations2 from "../assets/public_relations2.jpg";
import secretary from "../assets/secretary.jpeg";
import tech_head from "../assets/tech_head.jpeg";
import treasurer from "../assets/treasurer.jpg";
import vice_president1 from "../assets/vice_president1.jpg";
import vice_president2 from "../assets/vice_president2.jpg";

const linkedinColor = "#0A66C2";

const MemberCard = styled(Card)(({ theme }) => ({
  marginLeft: "3rem",
  marginRight: "3rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  height: "18.5rem",
  width: "14rem",
  backgroundColor: "#cdcdd1",
  // backgroundColor: "#dcdedc",
  borderRadius: "0.8rem",
}));

const MemberText = styled(Typography)(({ theme }) => ({
  color: "black",
  //color: "white",
  fontFamily: "Quicksand",
  fontSize: "1.3rem",
}));

const SubText = styled(Typography)(({ theme }) => ({
  color: "black",
  //color: "white",
  fontFamily: "Quicksand",
  fontSize: "1rem",
}));

const execomMembers = [
  {
    name: "Jithin Jose",
    position: "Faculty Coordinator",
    linkedin: "",
    image: coordinator,
  },
  {
    name: "Varsha L K",
    position: "President",
    linkedin: "",
    image: president,
  },
  {
    name: "Megha R",
    position: "Secretary",
    linkedin: "https://www.linkedin.com/in/megha-r-924745243",
    image: secretary,
  },
  {
    name: "Acquin Biju",
    position: "Treasurer",
    linkedin: "https://www.linkedin.com/in/acquin-biju-b809971bb",
    image: treasurer,
  },
  {
    name: "Inam Rahman",
    position: "Vice President",
    linkedin: "https://in.linkedin.com/in/inam-rahaman-913096269",
    image: vice_president1,
  },
  {
    name: "Sharika Shankar",
    position: "Vice President",
    linkedin: "https://www.linkedin.com/in/sharika-p-v-9610301a2",
    image: vice_president2,
  },
  {
    name: "Sreehari M M",
    position: "Tech Head",
    linkedin: "https://www.linkedin.com/in/sreehari-mm",
    image: tech_head,
  },
  {
    name: "Anupama A B",
    position: "Joint Secretary",
    linkedin: "https://www.linkedin.com/in/anupama-a-b-9597121a3",
    image: joint_secretary1,
  },
  {
    name: "C A Mohammed Aman",
    position: "Joint Secretary",
    linkedin: "",
    image: joint_secretary2,
  },
  {
    name: "Jegan Joseph",
    position: "Media Head",
    linkedin: "https://www.linkedin.com/in/jegan-joseph-4585b2212",
    image: media_head,
  },
  {
    name: "Fidha Jamal",
    position: "Content Head",
    linkedin: "https://www.linkedin.com/in/fidha-jamal-198b5a208",
    image: content,
  },
  {
    name: "Anamik E",
    position: "Arts Head",
    linkedin: "https://www.linkedin.com/in/anamik-e-2b33b5249",
    image: arts_head1,
  },
  {
    name: "Sanin P",
    position: "Arts Head",
    linkedin: "",
    image: arts_head2,
  },
  {
    name: "Ann Maria Joy",
    position: "Public Relations Head",
    linkedin: "https://www.linkedin.com/in/ann-maria-joy-0496631b5",
    image: public_relations1,
  },
  {
    name: "Pranav P",
    position: "Public Relations Head",
    linkedin: "https://www.linkedin.com/in/pranav-p-a94b70259",
    image: public_relations2,
  },
  {
    name: "Hiba Thasneem",
    position: "Executive Committee",
    linkedin: "https://www.linkedin.com/in/hiba-thasneem-b96071209",
    image: execom1,
  },
  {
    name: "Akhil Prince",
    position: "Executive Committee",
    linkedin: "https://www.linkedin.com/in/akhil-prince-46b3ba249",
    image: execom2,
  },
  {
    name: "Sooraj K",
    position: "Executive Committee",
    linkedin: "https://www.linkedin.com/in/sooraj-k-91844b229",
    image: execom3,
  },
  {
    name: "Malavika Pradeep",
    position: "Alumni Handle",
    linkedin: "https://www.linkedin.com/in/malavika-pradeep-",
    image: alumnih1,
  },
  {
    name: "Aruna P V",
    position: "Alumni Handle",
    linkedin: "https://www.linkedin.com/in/aruna-pv-719b55208",
    image: alumnih2,
  },
  {
    name: "Eldhose Abraham",
    position: "Alumni Handle",
    linkedin: "https://www.linkedin.com/in/eldhose-abraham-11a981250/",
    image: alumnih3,
  },
];

const EesaLibrary = () => {
  return (
    <Grid container direction="column">
      <Helmet>
        <title>EESA - About Us</title>
        <meta name="description" content="About EESA" />
      </Helmet>

      <div className="about-page">
        <Grid container direction="row" sx={{ height: "100vh" }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Card
              variant="outlined"
              sx={{ backgroundColor: "white", opacity: 0.6 }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "6rem" },
                    color: "black",
                    fontWeight: 900,
                    fontFamily: "Quicksand",
                  }}
                >
                  ABOUT EESA
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Quicksand",
              mt: "2rem",
            }}
          >
            EESA 2022-23
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Grid item>
            <MemberCard align="center" elevation={0}>
              <Box
                sx={{ mt: "0.5rem", height: 180, borderRadius: 90 }}
                component="img"
                src={hod}
              />
              <CardContent>
                <MemberText>Dr. Latha P G</MemberText>
                <SubText>HOD</SubText>
                <Link href="" rel="noreferrer" target="_blank">
                  {/* <LinkedInIcon sx={{ color: linkedinColor }} /> */}
                </Link>
              </CardContent>
            </MemberCard>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: "1rem" }}
        >
          {execomMembers.map((member, index) => (
            <Grid item key={index}>
              <MemberCard align="center" elevation={0} sx={{ height: "20rem" }}>
                <Box
                  sx={{ mt: "0.5rem", height: 180, borderRadius: 90 }}
                  component="img"
                  src={member.image}
                />
                <CardContent>
                  <MemberText>{member.name}</MemberText>
                  <SubText>{member.position}</SubText>
                  <Link href={member.linkedin} rel="noreferrer" target="_blank">
                    <LinkedInIcon sx={{ color: linkedinColor }} />
                  </Link>
                </CardContent>
              </MemberCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <GoToTop />
    </Grid>
  );
};

export default EesaLibrary;
