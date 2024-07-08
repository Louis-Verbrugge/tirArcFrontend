
import styles from './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Annonce from './components/Page/annoncePage/annonce';
import Competition from './components/Page/competitionPage/competition';
import ResultatCompetition from './components/Page/competitionPage/resultatCompetition';
import Inscription from './components/Page/inscriptionPage/inscription';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/annonce' element={<Annonce />} />
        <Route path='/competition' element={<Competition />} />
        <Route path='/competition/:annee' element={<ResultatCompetition />} />
        <Route path='/inscription' element={<Inscription />} />

      </Routes>
    </Router>
  );
}

export default App;
