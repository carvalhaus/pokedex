import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StandardPage from "./pages/StandardPage";
import Regions from "./pages/Regions";
import Favorites from "./pages/Favorites";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StandardPage />}>
        <Route index element={<Home />} />
        <Route path="regions" element={<Regions />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
