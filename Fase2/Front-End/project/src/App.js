import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';


import FirstPage from './Pages/FirstPage';
import LoginUser from './Pages/LoginUser';
import LoginOwner from './Pages/LoginOwner';
import FrontPageUser from './Pages/FrontPageUser';
import Map from './Pages/Map';
import FrontPageOwner from './Pages/FrontPageOwner';
import AddRestaurant from './Pages/AddRestaurant';
import RemoveRestaurant from './Pages/RemoveRestaurant';
import ChooseEditRestaurant from './Pages/ChooseEditRestaurant';
import EditRestaurant from './Pages/EditRestaurant';
import MenuRestaurante from './Pages/MenuRestaurante';
import Restaurante from './Pages/Restaurante';
import SignInUser from './Pages/SignInUser';
import SignInOwner from './Pages/SignInOwner';
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
          <Route path="/SignInOwner" component={SignInOwner}></Route> 
          <Route path="/FrontPageUser" component={FrontPageUser}></Route> 
          <Route path="/Map" component={Map}></Route> 
          <Route path="/FrontPageOwner" component={FrontPageOwner}></Route> 
          <Route path="/AddRestaurant" component={AddRestaurant}></Route> 
          <Route path="/RemoveRestaurant" component={RemoveRestaurant}></Route> 
          <Route path="/ChooseEditRestaurant" component={ChooseEditRestaurant}></Route> 
          <Route path="/EditRestaurant" component={EditRestaurant}></Route> 
          <Route path="/MenuRestaurante" component={MenuRestaurante}></Route> 
          <Route path="/Restaurante" component={Restaurante}></Route> 
          <Route path="/LoginOwner" component={LoginOwner}></Route>
          <Route path="/LoginUser" component={LoginUser}></Route>
          <Route path="/" exact component={FirstPage}></Route>
        </Switch>
      </div>
    </Router>

  );
  
}

export default App;
