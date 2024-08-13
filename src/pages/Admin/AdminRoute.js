

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddNews from './page/AddNews/AddNews'

function AdminRoute() {
  return (
    <Routes>
      
      <Route path='/' element={<AddNews />} />
    </Routes>
  );
}

export default AdminRoute;
