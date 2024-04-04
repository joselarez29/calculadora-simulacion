import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

const links = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Poisson',
    path: '/distribucion/poisson'
  },
  {
    name: 'Exponencial',
    path: '/distribucion/exponencial'
  },
  {
    name: 'Un Servidor',
    path: '/lineas-de-espera/un-servidor'
  },
  {
    name: 'Varios Servidores',
    path: '/lineas-de-espera/varios-servidores'
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