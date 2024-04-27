import React, { useContext } from 'react'
import { Box, IconButton, useTheme, Select, MenuItem, Typography } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import fire from '../../config/Fire';
import { AuthContext } from '../../context/Auth';


const Topbar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { currentUser } = useContext(AuthContext);


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        borderRadius="0px"
      >        
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton> */}
<Box m="1px" >
  <p>Settings</p>
          <Box display="flex" justifyContent="center" alignItems="center">

          </Box>
        <Select 
 
          sx={{
            marginTop: 0,
            width: 90,
            height: 40,
            
          }}
        >
          <MenuItem  onClick={() => fire.auth().signOut()} >
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <Typography variant="h5"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 0 0" }}>
              LogOut:  {currentUser.email}
            </Typography>
          </MenuItem>
          <MenuItem onClick={colorMode.toggleColorMode}>
            <IconButton >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <Typography variant="h5"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 0 0" }}>
              ColorMode
            </Typography>
          </MenuItem>
        </Select>
        {/* <IconButton>
        <SettingsOutlinedIcon/>
      </IconButton> */}
</Box>
      </Box>
    </Box>
  )
}

export default Topbar;  
