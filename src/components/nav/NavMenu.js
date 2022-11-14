import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider, Link } from '@mui/material';
import NavLink from './NavLink';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  
}));

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        disableRipple
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          fontSize: "1.3rem",
          lineHeight: 1,
          padding: 0,
          color: "background.default",
          '&:hover': {
            color: "primary.main",
          },
        }}
      >
        Wiki
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        PaperProps={{
          sx: {
            backgroundColor:"text.primary",
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href={"/wiki/routen"} 
            underline="none"
            sx={{
              margin: "0 1rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color:"background.default",
              "&:hover": {
                color: "primary.main",
              }
            }}
          >
            Route
          </Link>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
