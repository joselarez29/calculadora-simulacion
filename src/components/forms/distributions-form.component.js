import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const DistributionsForm = ({ setData, type }) => {
  const [contidionalType, setConditionalType] = useState("lessAndEqualThan");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const variables = [formData.get('random-variable'), formData.get('random-variable-left'), formData.get('random-variable-right')].filter(n => n).map(Number)

    setData({
      avgSuccessRate: Number(formData.get('average-success-rate')),
      conditional: {
        type: contidionalType,
        variables,
      },
    })
  };

  return (
    <Container maxWidth='md'>
      <Box component='form' onSubmit={handleSubmit} m='auto'>
        <Grid container spacing={1} alignItems="center" flexDirection="column">
          <Grid item container xs={12} sm={3} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="overline">
                Tasa media de éxito
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type='number'
                name="average-success-rate"
                label="Media (μ)"
                inputProps={{
                  min: 0,
                  step: 0.01,
                }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={9} spacing={1} justifyContent="center">
            <Grid item container xs={8} sm={3} spacing={1}>
              <Grid item xs={12}>
                <Typography variant="overline">
                  Condicional
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="conditional">Tipo</InputLabel>
                  <Select
                    labelId="conditional"
                    id="demo-simple-select"
                    name="conditional-type"
                    value={contidionalType}
                    label="Condicional"
                    onChange={e => setConditionalType(e.target.value)}
                    required
                  >
                    {
                      type === "poisson" &&
                      [
                        <MenuItem key="equalThan" value="equalThan">X = x</MenuItem>,
                        <MenuItem key="greaterThan" value="greaterThan">X {">"} x</MenuItem>,
                        <MenuItem key="lessThan" value="lessThan">X {"<"} x</MenuItem>,
                      ]
                    }
                    <MenuItem value="lessAndEqualThan">X ≤ x</MenuItem>
                    <MenuItem value="greaterAndEqualThan">X ≥ x</MenuItem>
                    <MenuItem value="lessEqualAndGreaterEqualThan">x ≤ X ≤ x</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item container xs={12} sm={8} spacing={1} alignItems="flex-end" justifyContent={{ xs: "center", sm: "flex-start" }}>
              {
                contidionalType !== "lessEqualAndGreaterEqualThan" ?
                  (
                    <Grid item xs={8}>
                      <TextField
                        required
                        fullWidth
                        type='number'
                        name="random-variable"
                        label="Variable Aleatoria (x)"
                        inputProps={{
                          min: 1
                        }}
                      />
                    </Grid>
                  )
                  :
                  (
                    <>
                      <Grid item xs={5}>
                        <TextField
                          required
                          fullWidth
                          type='number'
                          name="random-variable-left"
                          label="x ≤ X"
                          inputProps={{
                            min: 0
                          }}
                        />
                      </Grid>
                      <Grid item xs={2} alignItems="center" mb={2}>
                        <Typography variant='body1' align='center'>≤ X ≤</Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          required
                          fullWidth
                          type='number'
                          name="random-variable-right"
                          label="X ≤ x"
                          inputProps={{
                            min: 0
                          }}
                        />
                      </Grid>
                    </>
                  )
              }

            </Grid>
          </Grid>
          <Grid item container xs={12} alignItems={{ xs: "center", sm: "flex-end" }} justifyContent="center" mt={2}>
            <Grid item xs={12} sm={3}>
              <Button type='submit' fullWidth variant='contained'>Calcular</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default DistributionsForm;