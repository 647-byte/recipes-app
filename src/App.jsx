import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// ↓ כאן כל אחת מוסיפה את ה־import שלה ↓
import RecipesList from "./pages/RecipesList";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import Login from "./pages/login/Login";
import Uncontrolled from "./pages/login/uncontrolled";
import Rhf from "./pages/login/rhf";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* ↓ כאן כל אחת מוסיפה את ה־Route שלה ↓ */}
        <Route path="recipes" element={<RecipesList />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>}>
          <Route path="uncontrolled" element={<Uncontrolled/>}/>
          <Route path="rhf" element={<Rhf/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
