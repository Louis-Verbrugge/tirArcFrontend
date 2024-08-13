
import styles from './App.css';
import LandingPage from './pages/Public/LandingPage/LandingPage';
import Annonce from './pages/Public/page/AnnoncePage/Annonce';
import Competition from './pages/Public/page/CompetitionPage/Competition';
import ResultatCompetition from './pages/Public/page/CompetitionPage/ResultatCompetition';
import Inscription from './pages/Public/page/InscriptionPage/Inscription';


import AuthAdmin from './_helpers/AuthAdmin';
import AdminRoute from './pages/Admin/AdminRoute'

import Login from './pages/Login/Login';

import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/admin/' element={
          <AuthAdmin>
            <AdminRoute />
          </AuthAdmin>
        }/>

        <Route path='/login' element={<Login />} />


        <Route path='/' element={<LandingPage />} />
        <Route path='/annonce' element={<Annonce />} />
        <Route path='/competition' element={<Competition />} />
        <Route path='/competition/:annee' element={<ResultatCompetition />} />
        <Route path='/inscription' element={<Inscription />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
