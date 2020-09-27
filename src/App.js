import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Signin from './pages/Signin';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Login from './pages/Login';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/signin' component={Signin} />
          <Route path='/support' component={Support} />
          <Route path='/Team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/login' component={Login} />
          
          
        </Switch>
      </Router>
    </>
  );
}

export default App;





