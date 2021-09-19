import './App.css';
import HeaderComponent from './components/Header';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import About  from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <HeaderComponent/>
      <Switch>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='*' component={HomePage}></Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
