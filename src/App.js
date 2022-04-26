

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
