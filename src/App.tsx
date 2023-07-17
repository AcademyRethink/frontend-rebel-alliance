import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Climate from "./pages/Climate";
import Profile from "./pages/Profile";
import SummaryTime from "./components/SummaryTime";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummaryTime resume={false} />} />
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
