import './App.css';

import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import OneServer from './routes/one-server/one-server.route';
import MultipleServers from './routes/multiple-servers/multiple-servers.route';

function App() {
  return (
    <Routes>
      <Route path='/lineas-de-espera' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='un-servidor' element={<OneServer />} />
        <Route path='varios-servidores' element={<MultipleServers />} />
      </Route>
    </Routes>
  );
}

export default App;
