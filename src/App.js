import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from './components/topbar/topbar';
//import Header from './components/header/Header';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import ContactUs from './pages/contactus/ContactUs';
import ManagerHome from './pages/manager/managerHome';
import ManagerBuildingCrud from './pages/manager/ManagerBuildingCrud';
import ManagerApartmentCrud from './pages/manager/ManagerApartmentCrud';
import ManagerGardenCrud from './pages/manager/ManagerGardenCrud';
import ManagerPoolCrud from './pages/manager/ManagerPoolCrud';
import ManagerPlantCrud from './pages/manager/ManagerPlantCrud';
import ManagerVisitorCrud from './pages/manager/ManagerVisitorCrud';



function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contactus">
          <ContactUs/>
        </Route>
        <Route exact path="/manager_home">
          <ManagerHome/>
        </Route>
        <Route exact path="/manager_building_crud">
          <ManagerBuildingCrud/>
        </Route>
        <Route exact path="/manager_owner_crud">
          <ManagerApartmentCrud/>
        </Route>
        <Route exact path="/manager_garden">
          <ManagerGardenCrud/>
        </Route>ManagerApartmentCrud
        <Route exact path="/manager_pool">
          <ManagerPoolCrud/>
        </Route>
        <Route exact path="/manager_plant">
          <ManagerPlantCrud/>
        </Route>
        <Route exact path="/manager_visitor">
          <ManagerVisitorCrud/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
