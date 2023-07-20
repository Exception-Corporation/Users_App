import { useCallback, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Register from '@mui/icons-material/AppRegistration';
import Dashboard from '@mui/icons-material/Dashboard';
import NavListDrawer from '@/shared/components/Navbar/NavListDrawer';
import { NavbarList } from '@/shared/utils/global.types';

// Create outside of the component to avoid unnecessary re-rendering (recreation) of it
const NavLinks: NavbarList[] = [
  { title: 'Home', icon: <HomeIcon />, path: '/' },
  { title: 'Login', icon: <LoginIcon />, path: '/Login' },
  { title: 'Register', icon: <Register />, path: '/Register' },
  { title: 'Dashboard', icon: <Dashboard />, path: '/Dashboard' }
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const change = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        />
        <MenuIcon />

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 /* to width almost all the space */ }}
        >
          News
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {NavLinks.map((element, i) => (
            <Button
              component={NavLink}
              key={i}
              color="inherit"
              startIcon={element.icon}
              to={element.path}
              sx={i < NavLinks.length - 1 ? { mr: 4 } : {}}
            >
              {element.title}
            </Button>
          ))}
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={change}>
        <NavListDrawer
          onClick={change}
          elements={NavLinks}
          component={NavLink}
        />
      </Drawer>
    </AppBar>
  );
}
