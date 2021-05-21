import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Beers from './pages/Beers';

import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/beers" component={Beers}></Route>
       {/* <Route></Route>
       <Route></Route> */}
     </Switch>
    </div>
  );
}

export default App;
