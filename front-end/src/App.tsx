import { CardList } from "./pages/CardList/CardList";
import { CardsInfo } from "./pages/CardsInfo/CardsInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardCreate } from "./pages/CardCreate/CardCreate";

import "./styles/globalStyles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/cards-info" element={<CardsInfo />} />
        <Route path="/card-create" element={<CardCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
