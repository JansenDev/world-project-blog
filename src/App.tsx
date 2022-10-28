import "./App.scss";
import Navegation from "@routes/index";
import { BrowserRouter } from "react-router-dom";
import { enviroments } from "./config";

function App() {
  return (
    <BrowserRouter>
      <Navegation />
    </BrowserRouter>
  );
}

export default App;
