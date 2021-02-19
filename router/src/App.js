import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';
import Menu from './Menu';
import Info from './Info';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/cart' component={Cart} />
          <Route  path='/menu' component={Menu} />
          <Route  path='/info' component={Info} />
          <Route path='/shop' exact  component={Shop}/>
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div><h1>Home Page</h1></div>
    );


export default App;
