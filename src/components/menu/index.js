import { Menu, MenuItem, IconButton } from '@mui/material';
import './index.css';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton() {
  const [anchorElm, setAnchorElm] = useState((null));
  const [open, setOpen] = useState((false));

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  }

  return (
    <div>
      <IconButton sx={{ width: 40, color:"#fff" }} onClick={handleClick}><MenuIcon/></IconButton>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Load Project</MenuItem>
        <MenuItem onClick={handleClose}>Download Learning Documents</MenuItem>
        <MenuItem onClick={handleClose}>Tutorials</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  )
}
export default MenuButton;