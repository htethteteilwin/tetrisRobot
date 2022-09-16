import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import pic from "../SUTD.png";
import "./index.css";
import MenuButton from '../menu';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <AppBar class="appBar" position="static" backgroundColor='#646C9D'>
      <Toolbar>
        <img src={pic} alt="Logo" style={{ height: 35 }} />
        <Typography variant="h6" component="div" color="#fff" sx={{ flex: 1 }}>
          Untitled Project
        </Typography>
        <Button class="New" color="inherit">New</Button>
        <Button class="Save" color="inherit" onClick={handleBack}>Save</Button>
        <MenuButton />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;