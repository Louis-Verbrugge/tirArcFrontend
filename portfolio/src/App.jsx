

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import Home from './page/Home/Home';
import Projects from './page/Projects/Projects';
import Skills from './page/Skills/Skills';
import AboutMe from './page/AboutMe/AboutMe';

import { useEffect } from 'react';



function App() {

  const [refPage, setRefPage] = useState(null);

  useEffect(() => {
    console.log("App");
    console.log(refPage);
  }
  , [refPage]);

  return (
    <BrowserRouter>

      <NavBar setRefPage={setRefPage} refPage={refPage}/>
        <Routes>  

          <Route path='/' element={<Home setRefPage={setRefPage} refPage={refPage} />} />
          <Route path='/projects' element={<Projects setRefPage={setRefPage} refPage={refPage} />} />
          <Route path='/skills' element={<Skills setRefPage={setRefPage} refPage={refPage} />} />
          <Route path='/aboutMe' element={<AboutMe setRefPage={setRefPage} refPage={refPage} />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App