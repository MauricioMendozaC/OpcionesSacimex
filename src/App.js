import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SolicitaCredito from './pages/SaciAlianza';
import CreditoGrupal from './pages/CreditoGrupal';
import CreditoIndividual from './pages/CreditoIndividual';
import Comisiones from './pages/Comisiones';
import EducacionFinanciera from './pages/EducacionFinanciera';
import RastreaTusCentavos from './pages/RastreaTusCentavos';
import Servicios from './pages/Servicios';
import RedDeProfesionales from './pages/RedDeProfesionales';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/SaciAlianza' element={<SolicitaCredito/>}/>
        <Route path='/CreditoGrupal' element={<CreditoGrupal/>}/>
        <Route path='/CreditoIndividual' element={<CreditoIndividual/>}/>
        <Route path='/Comisiones' element={<Comisiones/>}/>
        <Route path='/EducacionFinanciera' element={<EducacionFinanciera/>}/>
        <Route path='/EducacionFinanciera/RastreaTusCentavos' element={<RastreaTusCentavos/>}/>
        <Route path='/Servicios' element={<Servicios/>}/>
        <Route path='/RedDeProfesionales' element={<RedDeProfesionales/>}/>
      </Routes>
    </Router>
  );
};

export default App;