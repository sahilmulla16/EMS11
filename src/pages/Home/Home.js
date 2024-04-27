import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/Header"
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import About from "../../component/About/About"

const Home = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
    {/* <Sidebar /> */}
      <main className='content'>
        {/* <Topbar /> */}
    {/* <Box m="20px"> */}
      {/* HEADER */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}
        <About/>
       {/* </Box>
    </Box> */}
    </main>
    </div>
  );
};

export default Home;
