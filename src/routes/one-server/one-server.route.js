import Grid from '@mui/material/Grid';
import Form from '../../components/form/form.component';
import OneServerTable from '../../components/one-server-table/one-server-table.component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import DisplayDataBox from '../../components/display-data-box/display-data-box.component';
import { useEffect, useState } from 'react';
import oneServerWithNoLimit from '../../utils/one-server-no-limit.utils';
import oneServerWithLimit from '../../utils/one-server-with-limit.utils';

const OneServer = () => {
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
        usageOfTheSystem,
        timeOnSystem,
        numberOfClientsOnTheQueue,
        timeOnQueue,
        numberOfClientsOnTheSystem,
        chanceTheyAre,
      } = hasLimit ? oneServerWithLimit({ arrivalTime, responseTime, limit }) : oneServerWithNoLimit({ arrivalTime, responseTime })

      setDisplayBoxData({
        ρ: usageOfTheSystem.toFixed(4),
        Ws: timeOnSystem.toFixed(4),
        Lq: numberOfClientsOnTheQueue.toFixed(4),
        Wq: timeOnQueue.toFixed(4),
        Ls: numberOfClientsOnTheSystem.toFixed(4),
      })

      setTableData(chanceTheyAre)

    }
  }, [data])

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' minHeight='calc(100vh - 1rem - 2.5rem - 64px)'>
      <Grid item container xs={12} justifyContent='center'>
        <Typography component='h1' variant='h2'>
          Un Servidor
        </Typography>
      </Grid>
      <Grid item container xs={12} mb={5}>
        <Form title='Un Servidor' setData={setData} hasMultipleServers={false} />
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

export default OneServer;