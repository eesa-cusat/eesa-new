import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { Link } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./commons/theme";

import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  ABOUT_ROUTE,
  ALUMNIDATA_ROUTE,
  DEPARTMENT_ROUTE,
  HOME_ROUTE,
  LIBRARY_ROUTE,
  REGISTER_ROUTE,
  STUDENTDATA_ROUTE,
} from "./commons/constants";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import About from "./routes/About";
import AlumniData from "./routes/AlumniData";
import Department from "./routes/Department";
import EesaLibrary from "./routes/EesaLibrary";
import Homepage from "./routes/Homepage";
import Register from "./routes/Register";
import Sem1s15 from "./routes/2015/Sem1";
import Sem2s15 from "./routes/2015/Sem2";
import Sem3s15 from "./routes/2015/Sem3";
import Sem4s15 from "./routes/2015/Sem4";
import Sem5s15 from "./routes/2015/Sem5";
import Sem6s15 from "./routes/2015/Sem6";
import Sem7s15 from "./routes/2015/Sem7";
import Sem8s15 from "./routes/2015/Sem8";
import Sem1s19 from "./routes/2019/Sem1";
import Sem2s19 from "./routes/2019/Sem2";
import Sem3s19 from "./routes/2019/Sem3";
import Sem4s19 from "./routes/2019/Sem4";
import Sem5s19 from "./routes/2019/Sem5";
import Sem6s19 from "./routes/2019/Sem6";
import Sem7s19 from "./routes/2019/Sem7";
import Sem8s19 from "./routes/2019/Sem8";
import Sem1s23 from "./routes/2023/Sem1";
import Sem2s23 from "./routes/2023/Sem2";
import Sem3s23 from "./routes/2023/Sem3";
import Sem4s23 from "./routes/2023/Sem4";
import Sem5s23 from "./routes/2023/Sem5";
import Sem6s23 from "./routes/2023/Sem6";
import Sem7s23 from "./routes/2023/Sem7";
import Sem8s23 from "./routes/2023/Sem8";
import StudentData from "./routes/StudentData";

function App() {
  const [value, setValue] = useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header value={value} setValue={setValue} />
      <HelmetProvider>
        <Helmet>
          <title>EESA CUSAT</title>
          <meta
            name="description"
            content="Welcome to the official website of Electrical Engineering Students Association of Cusat"
          />
          <meta name="keywords" content="Cusat, EESA, Electrical, SOE" />
        </Helmet>
      </HelmetProvider>
      <Routes>
        <Route exact path={HOME_ROUTE} element={<Homepage />} />
        <Route exact path={DEPARTMENT_ROUTE} element={<Department />} />
        <Route exact path={LIBRARY_ROUTE} element={<EesaLibrary />} />
        <Route exact path={ABOUT_ROUTE} element={<About />} />
        <Route exact path={REGISTER_ROUTE} element={<Register />} />
        <Route exact path={STUDENTDATA_ROUTE} element={<StudentData />} />
        <Route exact path={ALUMNIDATA_ROUTE} element={<AlumniData />} />
        <Route exact path="/2015/sem1" element={<Sem1s15 />} />
        <Route exact path="/2015/sem2" element={<Sem2s15 />} />
        <Route exact path="/2015/sem3" element={<Sem3s15 />} />
        <Route exact path="/2015/sem4" element={<Sem4s15 />} />
        <Route exact path="/2015/sem5" element={<Sem5s15 />} />
        <Route exact path="/2015/sem6" element={<Sem6s15 />} />
        <Route exact path="/2015/sem7" element={<Sem7s15 />} />
        <Route exact path="/2015/sem8" element={<Sem8s15 />} />
        <Route exact path="/2019/sem1" element={<Sem1s19 />} />
        <Route exact path="/2019/sem2" element={<Sem2s19 />} />
        <Route exact path="/2019/sem3" element={<Sem3s19 />} />
        <Route exact path="/2019/sem4" element={<Sem4s19 />} />
        <Route exact path="/2019/sem5" element={<Sem5s19 />} />
        <Route exact path="/2019/sem6" element={<Sem6s19 />} />
        <Route exact path="/2019/sem7" element={<Sem7s19 />} />
        <Route exact path="/2019/sem8" element={<Sem8s19 />} />
        <Route exact path="/2023/sem1" element={<Sem1s23 />} />
        <Route exact path="/2023/sem2" element={<Sem2s23 />} />
        <Route exact path="/2023/sem3" element={<Sem3s23 />} />
        <Route exact path="/2023/sem4" element={<Sem4s23 />} />
        <Route exact path="/2023/sem5" element={<Sem5s23 />} />
        <Route exact path="/2023/sem6" element={<Sem6s23 />} />
        <Route exact path="/2023/sem7" element={<Sem7s23 />} />
        <Route exact path="/2023/sem8" element={<Sem8s23 />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
