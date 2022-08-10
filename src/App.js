import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
