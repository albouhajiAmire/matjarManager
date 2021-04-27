import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './css/style.css';
import Nav from './navbar/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Home';
import Fonctionalité from './components/Fonctionalité';
import Tarif from './components/Tarif';
import Contact from './components/Contact';
function App() {
  return (
 
< > 

<BrowserRouter>
<Nav/>
<Switch>
<Route exact path="/" component={Homepage} />
<Route path="/fonctionnalité" component={Fonctionalité}/>
<Route path="/tarif" component={Tarif}/>
<Route path="/contact" component={Contact}/>
</Switch>
</BrowserRouter>
<Footer/>
</>
   
  );
}

export default App;
