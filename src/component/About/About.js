import React from 'react';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import { tokens } from "../../theme";
import Header from "../../component/Header"
import './About.css';
import { Box, IconButton, useTheme, colors } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image2 from "../../assets/logo111.jpeg";
import Image3 from "../../assets/flowchart.jpeg";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      <Sidebar />
      <main className='content'>
        <Topbar />
        <Box m="20px">
          <Header title="About" subtitle="Information about the EMS " />
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={Image2}
              alt="logo111.png"
              style={{
                height: '200px',
                background: '#fff',
                borderRadius: '100%',
              }}>
            </img>
          </Box>
          <br>
          </br>
          <div
            className="heading">
            <p>INTRODUCTION</p>
          </div>
          <div
            className="about-content">
            <AccordionDetails>
              <p>A Employee Management system that allows the admin to keep track of the users activity and ensure its security. It provides features such as website blocking, session time monitoring, and even key logging. 
                <br></br>This system typically involves the use session time monitoring, user management, and a dedicated workspace is an essential tool for businesses and organizations that prioritize data security and privacy.
                <br></br> With the ability to track and monitor user sessions, the system provides valuable insights into user activity and behaviour, allowing administrators to identify potential security threats and take corrective action as needed.
                <br></br>Robust user management features enable administrators to control access to sensitive data and information, ensuring that only authorized users can access and modify critical information.
                <br></br>With these key features, a Employee Management system can help businesses and organizations protect their valuable data and assets, mitigate risks, and maintain compliance with regulatory requirements.
              </p>
            </AccordionDetails>
          </div>
          <br>
          </br>
          <div
            className="heading">
            <p>FLOWCHART</p>
          </div>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={Image3}
              alt="flowchart.png"
              style={{
                height: '500px',
                background: '#fff',
                borderRadius: '',
              }}>
            </img>

          </Box>
          <br></br>
          <br></br>
          <br></br>
          <div
            className="heading">
            <p>CONCLUSION</p>
          </div>
          <div
            className="about-content">
            <AccordionDetails>
              <p>In conclusion, A Employee Management system is an essential tool for protecting your organization's assets, data, and people. With its advanced technology and real-time monitoring capabilities, it can detect and prevent security threats before they cause any harm. By implementing a comprehensive Employee management system, you can significantly enhance your organization's security posture and reduce the risk of security breaches.
                Overall, a Employee Management system is a wise investment for any organization that values its security and wants to safeguard against potential threats.

              </p>
            </AccordionDetails>
          </div>
        </Box>
      </main>
    </div>
  )
}
export default About;
