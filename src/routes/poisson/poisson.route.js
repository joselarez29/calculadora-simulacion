import Grid from '@mui/material/Grid';
import DistributionsForm from '../../components/forms/distributions-form.component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import DisplayDataBox from '../../components/display-data-box/display-data-box.component';
import { useEffect, useState } from 'react';
import DistributionTable from '../../components/distribution-table/distribution-table.component';
import { getPoissonProbabilities } from '../../utils/poisson.utils';

const columns = [
  {
    id: 'n',
    align: 'center',
    label: 'n', minWidth: 170
  },
  {
    id: 'poisson',
    label: 'P (X = n)',
    align: 'center',
    minWidth: 170,
    format: (value) => value.toFixed(6),
  },
  {
    id: 'percentage',
    label: 'Porcentaje',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2) + "%",
  },
];

const Poisson = () => {
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [displayBoxData, setDisplayBoxData] = useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const { avgSuccessRate, conditional } = data;
    const hasData = !!Object.values(data).length;

    console.log({ avgSuccessRate, conditional })
    if (hasData) {
      const exponentialProbs = getPoissonProbabilities(avgSuccessRate, conditional);

      let displayBoxResultKey = `P (x)`;
      switch (conditional.type) {
        case "equalThan":
          displayBoxResultKey = `P (X = ${conditional.variables[0]})`;
          break;
        case "greaterThan":
          displayBoxResultKey = `P (X > ${conditional.variables[0]})`;
          break;
        case "lessThan":
          displayBoxResultKey = `P (X < ${conditional.variables[0]})`;
          break;
        case "lessAndEqualThan":
          displayBoxResultKey = `P (X ≤ ${conditional.variables[0]})`;
          break;
        case "greaterAndEqualThan":
          displayBoxResultKey = `P (X ≥ ${conditional.variables[0]})`;
          break;
        case "lessEqualAndGreaterEqualThan":
          displayBoxResultKey = `P (${conditional.variables[0]} ≤ X ≤ ${conditional.variables[1]})`;
          break;
        default:
          break;
      }
      setDisplayBoxData({
        [displayBoxResultKey]: exponentialProbs.variableProbability.toFixed(6) + ` (${(exponentialProbs.variableProbability * 100).toFixed(2)}%)`,
      })

      console.log(exponentialProbs)

      setTableData(exponentialProbs.tableProbabilities)

    }
  }, [data])

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' minHeight='calc(100vh - 1rem - 2.5rem - 64px)'>
      <Grid item container xs={12} justifyContent='center'>
        <Typography component='h1' variant='h2'>
          Distribución Poisson
        </Typography>
      </Grid>
      <Grid item container xs={12} mb={5}>
        <DistributionsForm setData={setData} type="poisson" />
      </Grid>
      <Grid item container xs={12} md={4} justifyContent='center'>
        <Typography component='h2' variant='h5' mb={3}>
          RESULTADOS
        </Typography>
        <DisplayDataBox data={displayBoxData} />
      </Grid>
      <Grid item container xs={12} md={8} pr={matches ? 4 : 0} pb={6} justifyContent='center' >
        <DistributionTable data={tableData} columns={columns} />
      </Grid>
    </Grid>
  )
}

export default Poisson;