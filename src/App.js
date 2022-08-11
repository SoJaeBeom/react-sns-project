import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Edit from "./pages/Edit";
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
