import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Climate from "./pages/Climate";
import Profile from "./pages/Profile";
import AuthPage from "./pages/Auth";
import AuthProvider from "./controllers/contextController";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/plantio/:id" />
            <Route path="/clima" element={<Climate />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
