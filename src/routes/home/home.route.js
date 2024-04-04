import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h3" fontWeight="light" mb={3}>Calculadora Probabilística</Typography>

      <Typography variant="body1" component="div" mb={2} fontSize="x-large" fontWeight="light">
        En esta presentación, se expondrá el desarrollo de una calculadora que calcula valores de probabilidad utilizando diferentes modelos probabilísticos:

        <Typography variant="body2" my={2} ml={4} fontStyle="italic" fontWeight="bold" fontSize="large">
          • Distribución de Poisson. <br />
          • Distribución exponencial. <br />
          • Líneas de espera con uno o varios servidores, con o sin límite. <br />
        </Typography>
      </Typography>
      {/* TODO: Add instructions of how the page works */}
      <Grid container justifyContent='center'>
        <img alt='Lineas de espera' style={{ height: 'auto', maxWidth: '100%' }} src={process.env.PUBLIC_URL + '/images/lineas-de-espera.png'} />
      </Grid>
    </Box>
  )
}

export default Home;