import './App.css';

import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import OneServer from './routes/one-server/one-server.route';
import MultipleServers from './routes/multiple-servers/multiple-servers.route';
import Poisson from './routes/poisson/poisson.route';
import Exponential from './routes/exponential/exponential.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='lineas-de-espera/un-servidor' element={<OneServer />} />
        <Route path='lineas-de-espera/varios-servidores' element={<MultipleServers />} />
        <Route path='distribucion/poisson' element={<Poisson />} />
        <Route path='distribucion/exponencial' element={<Exponential />} />
      </Route>
    </Routes>
  );
}

export default App;
