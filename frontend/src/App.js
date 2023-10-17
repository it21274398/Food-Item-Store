import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import Registerscreen from "./components/RegisterScreen";
import ItemCartScreen from "./components/ItemCartScreen";
import FavouriteScreen from "./components/FavoriteScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/ItemCartScreen" element={<ItemCartScreen />} />
          <Route path="/FavIteScreen" element={<FavouriteScreen />} />
          <Route path="/registerScreen" element={<Registerscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
