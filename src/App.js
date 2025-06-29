import './App.css';
import LandingPage from './pages/Public/LandingPage/LandingPage';
import Inscription from './pages/Public/page/InscriptionPage/Inscription';

import { NavBar } from './components/NavBar/NavBar';

import Actualite from './pages/Public/page/Actualites/Actualites';
import ActualitesDetails from './pages/Public/page/Actualites/ActualitesDetails/ActualitesDetails';

import Prensetation from './pages/Public/page/Presentation/Presentation';

import MentionLegales from './pages/Public/page/MentionsLegales/MentionsLegales';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from './components/Footer/Footer';

import { useState } from 'react';
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
        

        <Route path='/' element={<LandingPage setRefPage={setRefPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} setChangeMemePage={setChangeMemePage}/>} />
        <Route path='/Qui-sommes-nous' element={<Prensetation setRefPage={setRefPage} />} />

        <Route path='/inscription' element={<Inscription setRefPage={setRefPage} />} /> 

        <Route path='/news' element={<Actualite setRefPage={setRefPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} setChangeMemePage={setChangeMemePage} />} />
        <Route path='/news/:titleActualites' element={<ActualitesDetails setRefPage={setRefPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} setChangeMemePage={setChangeMemePage} />} />

        <Route path='/photos' element={<Photos setRefPage={setRefPage} />} />

        <Route path='/mentions-legales' element={<MentionLegales setRefPage={setRefPage} />} />


      </Routes>

      <Footer setRefFooter={setRefFooter} refPage={refPage} refFooter={refFooter} annimChangePage={annimChangePage} setAnnimChangePage={setAnnimChangePage} changeMemePage={changeMemePage}/>
    </BrowserRouter>
  );
}

export default App;
