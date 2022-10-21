import './App.css';
import Home from './pages/Home';
import Details from "./pages/detail"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
