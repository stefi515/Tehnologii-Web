import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProdusePage from "./pages/ProdusePage.jsx";
import ProdusDetaliuPage from "./pages/ProdusDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProdusePage />} />
        <Route path="/produse/:id" element={<ProdusDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}