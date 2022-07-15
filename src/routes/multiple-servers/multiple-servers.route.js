import Grid from '@mui/material/Grid';
import Form from '../../components/form/form.component';
import OneServerTable from '../../components/one-server-table/one-server-table.component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import DisplayDataBox from '../../components/display-data-box/display-data-box.component';
import { useEffect, useState } from 'react';
import multipleServersWithNoLimit from '../../utils/multiple-servers-no-limit.utils';
import multipleServersWithLimit from '../../utils/multiple-servers-with-limit.utils';

const MultipleServers = () => {
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [displayBoxData, setDisplayBoxData] = useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const { arrivalTime, responseTime, serversAmount, hasLimit, limit } = data;
    const hasData = !!Object.values(data).length;

    if (hasData) {
      const {
        displayBox,
        table
      } = hasLimit ? multipleServersWithLimit({ arrivalTime, responseTime, limit, serversAmount }) : multipleServersWithNoLimit({ arrivalTime, responseTime, serversAmount })

      setDisplayBoxData(displayBox)

      setTableData(table)

    }
  }, [data])

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' minHeight='calc(100vh - 1rem - 2.5rem - 64px)'>
      <Grid item container xs={12} justifyContent='center'>
        <Typography component='h1' variant='h2'>
          Varios Servidores
        </Typography>
      </Grid>
      <Grid item container xs={12} mb={5}>
        <Form title='Un Servidor' setData={setData} hasMultipleServers />
      </Grid>
      <Grid item container xs={12} md={4} justifyContent='center'>
        <Typography component='h2' variant='h5' mb={3}>
          RESULTADOS
        </Typography>
        <DisplayDataBox data={displayBoxData} />
      </Grid>
      <Grid item container xs={12} md={8} pr={matches ? 4 : 0} pb={6} justifyContent='center' >
        <OneServerTable data={tableData} />
      </Grid>
    </Grid>
  )
}

export default MultipleServers;