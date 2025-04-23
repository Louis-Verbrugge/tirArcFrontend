import styles from './App.css';
import axios from 'axios';
import LandingPage from './pages/Public/LandingPage/LandingPage';
import Competition from './pages/Public/page/CompetitionPage/Competition';
import ResultatCompetition from './pages/Public/page/CompetitionPage/ResultatCompetition';
import Inscription from './pages/Public/page/InscriptionPage/Inscription';

import AuthAdmin from './_helpers/AuthAdmin';
import AdminRoute from './pages/Admin/AdminRoute';
import AccountRoute from './pages/Account/AccountRoute';
import { NavBar } from './components/NavBar/NavBar';

import Actualite from './pages/Public/page/Actualites/Actualites';
import ActualitesDetails from './pages/Public/page/Actualites/ActualitesDetails/ActualitesDetails';

import Prensetation from './pages/Public/page/Presentation/Presentation';

import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/admin/*' element={
          <AuthAdmin>
            <AdminRoute />
          </AuthAdmin>
        }/>

        <Route path='/account/*' element={<AccountRoute />} />

        <Route path='/' element={<LandingPage />} />
        <Route path='/Qui-sommes-nous' element={<Prensetation />} />

        <Route path='/competition' element={<Competition />} />
        <Route path='/competition/:annee' element={<ResultatCompetition />} />
        <Route path='/inscription' element={<Inscription />} />

        <Route path='/news' element={<Actualite/>} />
        <Route path='/news/:titleActualites' element={<ActualitesDetails />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
