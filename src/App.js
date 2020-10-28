// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import KidoNavbar from './components/KidoNavbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <KidoNavbar></KidoNavbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
