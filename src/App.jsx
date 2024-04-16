import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StandardPage from "./pages/StandardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StandardPage />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
