import "bootstrap/dist/css/bootstrap.min.css";
import "./Header/NavBar.css";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Header/NavBar";
import AppRoutes from "./Header/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
