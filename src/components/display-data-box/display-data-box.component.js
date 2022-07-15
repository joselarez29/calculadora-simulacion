import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const DisplayDataBox = ({ data }) => {

  return (
    <Grid container justifyContent='center'>
      {
        Object.entries(data).map(([key, value], i) => {

          return (

            <Grid key={i} item xs={6} sm={4}>
              <Typography component="h5" variant='subtitle1' textAlign='center' fontWeight='bold'>
                {key}
              </Typography>
              <Typography component="p" variant="overline" textAlign='center' fontSize='medium'>
                {value}
              </Typography>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default DisplayDataBox;