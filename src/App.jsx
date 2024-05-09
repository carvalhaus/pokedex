import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StandardPage from "./pages/StandardPage";
import Regions from "./pages/Regions";
import Favorites from "./pages/Favorites";
import Menu from "./components/Menu";
import ApiProvider from "./context/ApiContext";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
        <Route path="/login" element={<Login />} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
