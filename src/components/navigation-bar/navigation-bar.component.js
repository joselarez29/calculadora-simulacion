import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;

const NavigationBar = ({ links }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6">
        UNIMAR
      </Typography>
      <Divider />
      <List>
        {links.map(({ name, path }, i) => (
          <ListItem key={i} disablePadding>
            <NavLink
              key={i}
              to={path}
              style={{ textDecoration: 'none', width: '100%', textAlign: 'center', margin: '1rem 0', fontFamily: 'Roboto' }}
            >
              {name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="relative" sx={{ mb: '2.5rem', background: 'rgb(39, 39, 39)' }} >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            color='white'
            mr={10}
          >
            UNIMAR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {links.map(({ name, path }, i) => (
              <NavLink key={i} to={path} style={{ color: 'white', textDecoration: 'none', marginRight: '2rem', fontFamily: 'Roboto' }}>
                {name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default NavigationBar;