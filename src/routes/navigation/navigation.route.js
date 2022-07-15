import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

const links = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Un Servidor',
    path: '/un-servidor'
  },
  {
    name: 'Varios Servidores',
    path: '/varios-servidores'
  }
]

const Navigation = () => {

  return (
    <Box sx={{ widht: '100%', minHeight: '100vh', p: '1rem' }}>
      <NavigationBar links={links} />
      <Outlet />
    </Box>
  );
}

export default Navigation;