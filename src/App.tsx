import './App.scss'
import Navegation from '@routes/index'
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter basename='/world-project-blog/' >
      <Navegation />
    </BrowserRouter>
  )
}

export default App
