import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SolicitaCredito from './pages/SaciAlianza';
import CreditoGrupal from './pages/CreditoGrupal';
import CreditoIndividual from './pages/CreditoIndividual';
import Comisiones from './pages/Comisiones';
import EducacionFinanciera from './pages/EducacionFinanciera';
import Servicios from './pages/Servicios';
import RedDeProfesionales from './pages/RedDeProfesionales';
import HistoriasDeExito from './pages/HistoriasDeExito';
import BolsaDeTrabajo from './pages/BolsaDeTrabajo';
import ErrorPage from './pages/404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RedireccionarAInicio/>}/>
        <Route path='/:id' element={<Inicio/>}/>
        <Route path='/SaciAlianza' element={<SolicitaCredito/>}/>
        <Route path='/CreditoGrupal' element={<CreditoGrupal/>}/>
        <Route path='/CreditoIndividual' element={<CreditoIndividual/>}/>
        <Route path='/Comisiones' element={<Comisiones/>}/>
        <Route path='/EducacionFinanciera' element={<EducacionFinanciera/>}/>
        <Route path='/Servicios' element={<Servicios/>}/>
        <Route path='/RedDeProfesionales' element={<RedDeProfesionales/>}/>
        <Route path='/HistoriasDeExito' element={<HistoriasDeExito/>}/>
        <Route path='/OportunidadesDeCarrera' element={<BolsaDeTrabajo/>}/>
        <Route path='/404' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

const RedireccionarAInicio = () => {
  var URLactual = window.location.href;
  var lastChar = URLactual.charAt(URLactual.length - 1);

  if(lastChar === '/'){
    window.location.replace('/Inicio');
  };
};


export default App;