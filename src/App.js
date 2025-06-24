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

import { Footer } from './components/Footer/Footer';

import { useEffect, useState } from 'react';
import Photos from './pages/Public/page/Photos/Photos';

function App() {

  
  const [refPage, setRefPage] = useState(null);
  const [refFooter, setRefFooter] = useState(null);
  const [annimChangePage, setAnnimChangePage] = useState(false);

  const [changeMemePage, setChangeMemePage] = useState(false);

  return (
    <BrowserRouter>
      <NavBar refPage={refPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} changeMemePage={changeMemePage} setChangeMemePage={setChangeMemePage} />

      <Routes>
        <Route path='/admin/*' element={
          <AuthAdmin>
            <AdminRoute />
          </AuthAdmin>
        }/> 

        <Route path='/account/*' element={<AccountRoute />} />

        <Route path='/' element={<LandingPage setRefPage={setRefPage} />} />
        <Route path='/Qui-sommes-nous' element={<Prensetation setRefPage={setRefPage} />} />

        <Route path='/competition' element={<Competition />} />
        <Route path='/competition/:annee' element={<ResultatCompetition />} />
        <Route path='/inscription' element={<Inscription setRefPage={setRefPage} />} />

        <Route path='/news' element={<Actualite setRefPage={setRefPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} setChangeMemePage={setChangeMemePage} />} />
        <Route path='/news/:titleActualites' element={<ActualitesDetails setRefPage={setRefPage} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} setChangeMemePage={setChangeMemePage} />} />

        <Route path='/photos' element={<Photos setRefPage={setRefPage} />} />


      </Routes>

      <Footer setRefFooter={setRefFooter}/>
    </BrowserRouter>
  );
}

export default App;
