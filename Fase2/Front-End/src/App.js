import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';


import FirstPage from './Pages/FirstPage';
import LoginUser from './Pages/LoginUser';
import LoginOwner from './Pages/LoginOwner';
import FrontPageUser from './Pages/FrontPageUser';
import SignInUser from './Pages/SignInUser';
import AboutUs from './Pages/AboutUs';
import Perfil from './Pages/Perfil';


function App() {
  return (
      
    <Router>
      <div>
        <Switch>
          <Route path="/Perfil" component={Perfil}></Route> 
          <Route path="/AboutUs" component={AboutUs}></Route> 
          <Route path="/SignInUser" component={SignInUser}></Route> 
          <Route path="/FrontPageUser" component={FrontPageUser}></Route> 
          <Route path="/LoginOwner" component={LoginOwner}></Route>
          <Route path="/LoginUser" component={LoginUser}></Route>
          <Route path="/" exact component={FirstPage}></Route>
        </Switch>
      </div>
    </Router>

  );
  
}

export default App;
