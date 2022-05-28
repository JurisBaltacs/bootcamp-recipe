import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../src/components/pages/home/Home";
import Search from "./components/pages/search/Search";
import Recipe from "./components/pages/recipe/Recipe";
import Create from "./components/pages/create/Create";

// Components
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
