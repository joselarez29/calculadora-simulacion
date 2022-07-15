import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" mb={3}>Bienvenido</Typography>

      <Typography variant="body1" mb={2}>
        Este es un programa ejecutable para la resolucion de problemas de lineas de espera, de Uno o Varios Servidores.
      </Typography>
      <Grid container justifyContent='center'>
        <img alt='Lineas de espera' style={{height: 'auto', maxWidth: '100%'}} src={process.env.PUBLIC_URL + '/images/lineas-de-espera.png'} />
      </Grid>
    </Box>
  )
}

export default Home;