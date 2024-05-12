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
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
