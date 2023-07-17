import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Climate from "./pages/Climate";
import Profile from "./pages/Profile";
import SelectGraphic from "./components/SelectGraphic";

function App() {
  return (
    <>
      <SelectGraphic />

      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/plantio/:id" />
          <Route path="/clima" element={<Climate />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
