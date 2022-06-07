import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "../src/components/pages/home/Home";
// import Search from "./components/pages/search/Search";
// import Recipe from "./components/pages/recipe/Recipe";
import Create from "./components/pages/create/Create";

// Components
// import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <li>
          <Link to="/create">Create</Link>
        </li>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          {/* <Route path="/search" element={<Search />}></Route> */}
          {/* <Route path="/recipes/:id" element={<Recipe />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
