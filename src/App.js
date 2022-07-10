
import ManulifePage from './ManulifePage';
import { Router } from "react-router-dom";

import './App.css';
import Routes from './route';
import history from "./history";

function App() {
  return (
    <Router history={history}>
        < ManulifePage>
          <Routes/>
        </ManulifePage>
    </Router>
  );
}

export default App;
