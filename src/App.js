
import styles from './App.css';
import axios from 'axios';
import LandingPage from './pages/Public/LandingPage/LandingPage';
import Annonce from './pages/Public/page/AnnoncePage/Annonce';
import Competition from './pages/Public/page/CompetitionPage/Competition';
import ResultatCompetition from './pages/Public/page/CompetitionPage/ResultatCompetition';
import Inscription from './pages/Public/page/InscriptionPage/Inscription';


import AuthAdmin from './_helpers/AuthAdmin';
import AdminRoute from './pages/Admin/AdminRoute'
import AccountRoute from './pages/Account/AccountRoute';


import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  axios.defaults.withCredentials = true;


  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/admin/*' element={
          <AuthAdmin>
            <AdminRoute />
          </AuthAdmin>
        }/>


        <Route path='/account/*' element={
          <AccountRoute />
        } />


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
