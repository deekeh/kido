import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import KidoNavbar from './components/KidoNavbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <KidoNavbar></KidoNavbar>
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
