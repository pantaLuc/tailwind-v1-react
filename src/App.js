

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
