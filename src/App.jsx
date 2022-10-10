import { BrowserRouter as Router, Route } from "react-router-dom"

import Musiques from './pages/Musiques'
import './App.css'
import Films from './pages/Films'

function App() {

  return (
    <div className="App">
      <h1>Bienvenue au GRETA!!!!</h1>
      <Router>
        <Route path="/" exact >
          <Musiques />
        </Route>
        <Route path="/films" exact >
          <Films />
        </Route>

      </Router>
      {/* <Musiques />
      <Films /> */}
    </div>
  )
}

export default App
