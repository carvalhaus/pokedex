import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StandardPage from "./pages/StandardPage";
import Regions from "./pages/Regions";
import Favorites from "./pages/Favorites";
import ApiProvider from "./context/ApiContext";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pokemon from "./pages/Pokemon";
import RegisterEmail from "./pages/RegisterEmail";
import LoginEmail from "./pages/LoginEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="regions" element={<Regions />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-email" element={<RegisterEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-email" element={<LoginEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
      <Toaster />
    </ApiProvider>
  );
}

export default App;
